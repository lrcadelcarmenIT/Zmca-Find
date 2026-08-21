(() => {
  // Set this on the page BEFORE loading this script, e.g.:
  // <script>window.ZMCA_GROQ_API_KEY = "gsk_...";</script>
  // <script src="ai-chat.js"></script>
  //
  // Get a free key at https://console.groq.com (no credit card required).
  //
  // WARNING: this puts your API key in the page source, visible to anyone
  // who views it. Fine for testing / low-traffic sites; if this gets real
  // traffic, move the fetch call below into a small serverless function
  // (Vercel/Netlify) and keep the key server-side instead.
  const GROQ_API_KEY = window.ZMCA_GROQ_API_KEY || "";
  const GROQ_MODEL = "llama-3.3-70b-versatile";
  const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

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

  const conversationHistory = [];

  panel.querySelector("#zmca-ai-form").onsubmit = async (e) => {
    e.preventDefault();

    const message = input.value.trim();

    if (!message || send.disabled) return;

    addMessage(message, "user");
    conversationHistory.push({ role: "user", content: message });

    input.value = "";
    send.disabled = true;

    const thinking = addMessage("Thinking…", "assistant");

    try {
      if (!GROQ_API_KEY) {
        throw new Error("Groq API key has not been configured.");
      }

      const catalog = typeof CATALOG !== "undefined" ? CATALOG : [];

      const systemInstruction =
        "You are the ZMCA Machinery Consultant — a focused sales-engineering " +
        "assistant for a food processing machinery company in the Philippines. " +
        "You ONLY discuss food production equipment, food product lines, " +
        "production volumes, budgets, and machine recommendations. If asked " +
        "about anything unrelated to food production machinery, briefly decline " +
        "and steer back to the topic.\n\n" +

        "RULES (follow strictly):\n" +
        "1. Only recommend machines that appear by exact name in the catalog " +
        "below. Never invent machine names, specs, categories, or prices.\n" +
        "2. If a matching item's price is null in the catalog, tell the " +
        "customer that model requires a direct quote from ZMCA — do not guess " +
        "a number.\n" +
        "3. If you don't yet know the customer's product, approximate volume, " +
        "and budget, ask for whichever piece is still missing — ONE focused " +
        "question at a time. Do not ask for all three at once.\n" +
        "4. Once you know enough, recommend 2-3 SPECIFIC machines by exact " +
        "catalog name with their PHP price, and briefly say why each fits " +
        "their product, volume, and budget (size, capacity, tabletop vs " +
        "standalone, chamber count — only using what's evident from the name).\n" +
        "5. If nothing in the catalog fits their budget or use case, say so " +
        "honestly instead of force-fitting a recommendation.\n" +
        "6. Keep replies short and concrete — 3-6 sentences, no filler, no " +
        "generic advice that could apply to any business.\n\n" +

        "EXAMPLE 1\n" +
        "Customer: \"I want to start bottling fresh juice.\"\n" +
        "You: \"Good — roughly how many bottles a day are you aiming to produce, " +
        "and do you have a budget range in mind?\"\n\n" +

        "EXAMPLE 2\n" +
        "Customer: \"About 200 bottles a day, budget around 50k.\"\n" +
        "You: \"For that volume, the GYK160 Digital Liquid filler (₱5,000) " +
        "is a low-cost manual option that fits your budget easily, or the " +
        "GC100-1000ML Liquid 1NZ (₱28,000) if you want single-nozzle semi-auto " +
        "filling for more consistency. Both are well within your 50k budget — " +
        "want a sealer to pair with either one?\"\n\n" +

        "EXAMPLE 3\n" +
        "Customer: \"How much is the DZ800 double chamber?\"\n" +
        "You: \"The DZ800 Double Chamber doesn't have a listed price — that " +
        "one needs a direct quote from ZMCA. If it helps in the meantime, the " +
        "DZ600 Double Chamber (₱118,000) or DZ500 Double Chamber (₱93,000) are " +
        "similar options with listed pricing.\"\n\n" +

        (catalog.length
          ? `CATALOG (JSON array — category, name, price in PHP, null = quote on request):\n${JSON.stringify(catalog)}`
          : "No catalog is currently loaded — tell the customer you can't pull exact models right now.");

      const response = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: "system", content: systemInstruction },
            ...conversationHistory
          ]
        })
      });

      const data = await response.json();

      thinking.remove();

      if (!response.ok) {
        throw new Error(data.error?.message || "AI request failed.");
      }

      const reply = data.choices?.[0]?.message?.content;

      if (!reply) {
        throw new Error("No reply returned by the model.");
      }

      conversationHistory.push({ role: "assistant", content: reply });
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
