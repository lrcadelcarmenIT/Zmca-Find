(() => {
  // Set this on the page BEFORE loading this script, e.g.:
  // <script>window.ZMCA_GEMINI_API_KEY = "AIza...";</script>
  // <script src="ai-chat.js"></script>
  //
  // WARNING: this puts your API key in the page source, visible to anyone
  // who views it. Fine for testing / low-traffic sites; if this gets real
  // traffic, move the fetch call below into a small serverless function
  // (Vercel/Netlify) and keep the key server-side instead.
  const GEMINI_API_KEY = window.ZMCA_GEMINI_API_KEY || "";
  const GEMINI_MODEL = "gemini-2.5-flash";
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const style = document.createElement("style");
  style.textContent = `
    #zmca-ai-button {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 9999;
      background: #000;
      color: #fff;
      border: 1px solid #000;
      padding: 15px 18px;
      font-family: Inter, sans-serif;
      font-size: 10px;
      letter-spacing: .16em;
      text-transform: uppercase;
      cursor: pointer;
    }

    #zmca-ai-panel {
      position: fixed;
      right: 20px;
      bottom: 72px;
      width: min(400px, calc(100vw - 40px));
      height: min(600px, 75vh);
      background: #fff;
      border: 1px solid #000;
      z-index: 9998;
      display: none;
      flex-direction: column;
      box-shadow: 0 15px 50px rgba(0,0,0,.18);
    }

    #zmca-ai-header {
      padding: 16px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #zmca-ai-header strong {
      font-size: 10px;
      font-weight: 500;
      letter-spacing: .16em;
      text-transform: uppercase;
    }

    #zmca-ai-close {
      background: none;
      border: 0;
      padding: 0;
      font-size: 20px;
      cursor: pointer;
    }

    #zmca-ai-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
    }

    .zmca-ai-message {
      margin-bottom: 14px;
      font-size: 13px;
      line-height: 1.55;
    }

    .zmca-ai-message.user {
      text-align: right;
    }

    .zmca-ai-bubble {
      display: inline-block;
      max-width: 88%;
      padding: 10px 12px;
      border: 1px solid #ddd;
      text-align: left;
      white-space: pre-wrap;
    }

    .zmca-ai-message.user .zmca-ai-bubble {
      background: #000;
      color: #fff;
      border-color: #000;
    }

    #zmca-ai-form {
      display: flex;
      border-top: 1px solid #000;
    }

    #zmca-ai-input {
      flex: 1;
      min-width: 0;
      border: 0;
      outline: none;
      padding: 14px;
      font-family: Inter, sans-serif;
      font-size: 13px;
      font-weight: 300;
    }

    #zmca-ai-send {
      background: #000;
      color: #fff;
      border: 0;
      padding: 0 17px;
      cursor: pointer;
      font-family: Inter, sans-serif;
      font-size: 10px;
      letter-spacing: .15em;
      text-transform: uppercase;
    }

    #zmca-ai-send:disabled {
      opacity: .4;
      cursor: not-allowed;
    }
  `;

  document.head.appendChild(style);

  const button = document.createElement("button");
  button.id = "zmca-ai-button";
  button.textContent = "Ask ZMCA AI";

  const panel = document.createElement("div");
  panel.id = "zmca-ai-panel";

  panel.innerHTML = `
    <div id="zmca-ai-header">
      <strong>ZMCA AI Machinery Consultant</strong>
      <button id="zmca-ai-close">×</button>
    </div>

    <div id="zmca-ai-messages"></div>

    <form id="zmca-ai-form">
      <input
        id="zmca-ai-input"
        placeholder="What are you planning to produce?"
        autocomplete="off"
      >
      <button id="zmca-ai-send" type="submit">Send</button>
    </form>
  `;

  document.body.appendChild(button);
  document.body.appendChild(panel);

  const messages = panel.querySelector("#zmca-ai-messages");
  const input = panel.querySelector("#zmca-ai-input");
  const send = panel.querySelector("#zmca-ai-send");

  function addMessage(text, type) {
    const wrapper = document.createElement("div");
    wrapper.className = `zmca-ai-message ${type}`;

    const bubble = document.createElement("div");
    bubble.className = "zmca-ai-bubble";
    bubble.textContent = text;

    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);

    messages.scrollTop = messages.scrollHeight;

    return wrapper;
  }

  addMessage(
    "Hi. I'm the ZMCA Machinery Consultant. Tell me what food product you want to make, your production volume, and your budget. I'll help you identify the machines you may need.",
    "assistant"
  );

  button.onclick = () => {
    panel.style.display = "flex";
    input.focus();
  };

  panel.querySelector("#zmca-ai-close").onclick = () => {
    panel.style.display = "none";
  };

  panel.querySelector("#zmca-ai-form").onsubmit = async (e) => {
    e.preventDefault();

    const message = input.value.trim();

    if (!message || send.disabled) return;

    addMessage(message, "user");

    input.value = "";
    send.disabled = true;

    const thinking = addMessage("Thinking…", "assistant");

    try {
      if (!GEMINI_API_KEY) {
        throw new Error("Gemini API key has not been configured.");
      }

      const catalog = typeof CATALOG !== "undefined" ? CATALOG : [];

      const systemInstruction =
        "You are the ZMCA Machinery Consultant, a helpful assistant for a food " +
        "production machinery company. Ask about the customer's food product, " +
        "production volume, and budget, then recommend suitable machines. " +
        "Keep answers concise and practical." +
        (catalog.length
          ? ` Here is the machine catalog you can recommend from, as JSON: ${JSON.stringify(catalog)}`
          : "");

      const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }]
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message }]
            }
          ]
        })
      });

      const data = await response.json();

      thinking.remove();

      if (!response.ok) {
        throw new Error(data.error?.message || "AI request failed.");
      }

      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!reply) {
        throw new Error("No reply returned by the model.");
      }

      addMessage(reply, "assistant");

    } catch (error) {
      thinking.remove();

      addMessage(
        "The AI consultant hit an error. Please try again in a moment.",
        "assistant"
      );

      console.error("ZMCA AI:", error);

    } finally {
      send.disabled = false;
      input.focus();
    }
  };
})();
