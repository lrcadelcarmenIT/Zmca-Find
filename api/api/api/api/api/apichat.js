import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    return res.status(204).end();
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "OpenAI API key is not configured."
    });
  }

  const { message, catalog } = req.body || {};

  if (!message) {
    return res.status(400).json({
      error: "Message is required."
    });
  }

  const safeCatalog = Array.isArray(catalog)
    ? catalog.slice(0, 250)
    : [];

  const catalogText = safeCatalog
    .map(machine => {
      const price =
        machine.price === null
          ? "Price on request"
          : `₱${Number(machine.price).toLocaleString("en-PH")}`;

      return `${machine.cat} | ${machine.name} | ${price}`;
    })
    .join("\n");

  const prompt = `
You are the ZMCA Find AI Machinery Consultant.

You help customers choose food-processing machinery from the ZMCA catalog.

IMPORTANT:
- Only recommend machines appearing in the catalog below.
- Never invent a machine model.
- Never invent a price.
- If the catalog does not contain enough information, say so.
- Prices are Philippine pesos.
- Be commercially practical.
- If the customer gives a production goal, suggest a logical production workflow.
- Distinguish essential machines from optional machines.
- Ask follow-up questions when production volume, product type, packaging, or budget is unclear.
- Keep answers reasonably concise.

CATALOG:

${catalogText}

CUSTOMER:

${message}
`;

  try {

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      input: prompt
    });

    return res.status(200).json({
      reply: response.output_text
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "AI service unavailable."
    });
  }
}
