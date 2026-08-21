// api/search.js
// Vercel serverless function: AI-powered natural-language product search.
// Requires an ANTHROPIC_API_KEY environment variable set in Vercel project settings.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server missing ANTHROPIC_API_KEY' });
    return;
  }

  const { query, catalog } = req.body || {};
  if (!query || typeof query !== 'string' || !Array.isArray(catalog)) {
    res.status(400).json({ error: 'Missing query or catalog' });
    return;
  }

  // Compact the catalog into plain text so we don't burn tokens on JSON punctuation.
  const catalogText = catalog
    .map(m => `${m.cat} | ${m.name} | ${m.price === null ? 'price on request' : m.price}`)
    .join('\n');

  const systemPrompt = `You help match a customer's description of the food product they want to make to the food-processing equipment they'll need, using ONLY the catalog below.

CATALOG (format: category | item name | price in PHP):
${catalogText}

Respond with ONLY a single JSON object, no markdown fences, no commentary, matching this exact shape:
{"match": boolean, "name": string, "desc": string, "items": string[]}

Rules:
- "items" must contain item names copied EXACTLY as they appear in the catalog (the part after the second "|", trimmed).
- Pick the smallest sensible set of machines that would realistically form a working line for what the customer described (typically 2-6 items).
- "name" is a short line/workflow title (e.g. "Ground Meat Line"). "desc" is one sentence explaining the line.
- If nothing in the catalog is a reasonable fit, return {"match": false, "name": "", "desc": "", "items": []}.
- Never invent item names that aren't in the catalog.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: systemPrompt,
        messages: [{ role: 'user', content: query }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      res.status(502).json({ error: 'Anthropic API error', detail: errText });
      return;
    }

    const data = await response.json();
    const raw = (data.content || []).map(b => b.text || '').join('').trim();
    const cleaned = raw.replace(/^```json\s*|\s*```$/g, '');

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      res.status(502).json({ error: 'Could not parse AI response' });
      return;
    }

    res.status(200).json(parsed);
  } catch (err) {
    res.status(500).json({ error: 'Request failed', detail: String(err) });
  }
}
