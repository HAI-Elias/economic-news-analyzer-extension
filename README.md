# Economic News Analyzer Extension

This project is an economic news analyzer Chrome extension that uses OpenAI's GPT-3.5 to analyze news articles and provide actionable insights for traders. The extension allows users to submit news articles and receive an analysis of how specific markets and assets may be impacted.

## Features

- **Analyze economic news**: The extension summarizes economic news in simple terms and highlights potential market impacts.
- **HTML-formatted response**: The analysis is returned in a user-friendly HTML format with clear headings and bullet points.
- **Backend Proxy Server**: The extension uses a proxy server to securely call the OpenAI API, ensuring the API key is not exposed on the frontend.

## Technologies Used

- **Chrome Extension**: To create the browser extension.
- **Express.js**: Backend server that proxies requests to the OpenAI API.
- **OpenAI API**: For natural language processing and analysis of news articles.
- **Node.js**: Server-side runtime.
- **dotenv**: For managing environment variables (e.g., OpenAI API key).
- **CORS**: For enabling cross-origin requests.

## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/HAI-Elias/economic-news-analyzer-extension.git
cd economic-news-analyzer-extension
```

### 2. Set up the backend server:
- Install dependencies:
```bash
npm install
```

- Create a `.env` file based on the `.env.example` and replace `your-openai-api-key-here` with your OpenAI API key.

### 3. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:3000`.

### 4. Install the Chrome extension:
1. Go to Chrome Extensions page (`chrome://extensions/`).
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the folder containing the extension code.

### 5. Test the extension:
- Open the extension, input a news article, and click **Analyze**.
- View the results in the popup.

## Deployment

The backend proxy server is deployed on Vercel for easy access to the OpenAI API.

### Vercel URL:
- Proxy server: `https://proxy-server-three-chi.vercel.app/`

## Contributing

Feel free to open issues and submit pull requests if you find bugs or have suggestions for improvements.
```