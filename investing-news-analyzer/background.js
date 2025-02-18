chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'analyze_news') {
    const prompt = `Analyze the following economic news and identify which markets and assets might be impacted.\nRender your answer in full HTML (use <p>, <strong> tags, etc.) so that it can be displayed correctly on a web page.\nProvide a brief and relevant list of affected markets (e.g., stock, commodities, currencies) and specific assets (e.g., companies, indices, or financial instruments).\n\nHere's the news's text:\n"${message.text}"\n`;

    const messages = [
      { role: "system", content: "You are an AI trained to analyze economic news articles and extract key insights for traders. Your task is to provide clear, concise, and actionable analysis based on the following criteria:\n\n1. **Summary for Traders**: Summarize the article in simple terms, explaining the news in a way that is easily understandable by an international anglophone trading audience. Focus on the core meaning and relevance of the information.\n\n2. **Market Impact**: Identify which markets (e.g., stock markets, commodities, currencies) could be impacted by the news. Be specific about the sectors, industries, or types of assets that are most likely to be affected.\n\n3. **Potential Market Movement**: Based on the content of the news, describe the potential direction in which the markets might move. Will they likely go up, down, or remain unchanged? Consider factors like supply, demand, sentiment, and economic fundamentals in your analysis.\n\nUse precise language and avoid unnecessary jargon. Your response should be actionable and tailored to a trading audience." },
      { role: "user", content: prompt }
    ];

    fetch('https://proxy-server-three-chi.vercel.app/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages })
    })
    .then(response => {
      console.log("Raw API response:", response);
      return response.json();
    })
    .then(data => {
      console.log("Data received from API:", data);
      if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
        chrome.storage.local.set({ analysisResult: data.choices[0].message.content });
      } else if (data.error) {
        console.error("API error:", data.error);
        chrome.storage.local.set({ analysisResult: "API error: " + data.error.message });
      } else {
        console.error("Unexpected API response:", data);
        chrome.storage.local.set({ analysisResult: "Error : unexpected API response" });
      }
    })
    .catch(error => {
      console.error('Error calling OpenAI API:', error);
      chrome.storage.local.set({ analysisResult: "Error calling OpenAI API" });
    });
  }
});