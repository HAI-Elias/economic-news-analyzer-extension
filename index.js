import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("Error: The OpenAI API key is not defined in the environment variables.");
  process.exit(1);
}

app.use(cors({
  origin: "*",
  methods: "POST",
  allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json());

app.post('/api/openai', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Incorrect format: 'messages' must be an array." });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-0125",
        messages: messages,
        max_tokens: 1024,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", errorText);
      return res.status(response.status).json({ error: "OpenAI API error", details: errorText });
    }

    const data = await response.json();
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (error) {
    console.error('Proxy server error:', error);
    res.status(500).json({ error: 'Internal proxy server error' });
  }
});

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Proxy server running");
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});