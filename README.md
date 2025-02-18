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

### 1. Download the Extension

- Download the `investing-news-analyzer` folder from the GitHub repository.

### 2. Load the Extension in Chrome

- Open **Google Chrome**.
- Go to the URL: `chrome://extensions/`
- Enable **Developer Mode** by toggling the switch in the top right corner.
- Click on the **Load unpacked** button.
- Select the `investing-news-analyzer` folder that you downloaded earlier.

Your extension should now be installed and ready to use.

### 3. Test the Extension

- Go to an article on **Investing.com** (currently only supported in the **Forex News** section).
- Click on the extension icon in your Chrome toolbar.
- A popup will appear with the results of the news analysis, including a summary and information on the potential market impact.

### 4. (Optional) Modify API Key

- If you want to use your own OpenAI API key, you can update the `.env.example` file in the project with your key.
- Rename `.env.example` to `.env` and replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key.

## Deployment

The backend proxy server is deployed on Vercel for easy access to the OpenAI API.

### Vercel URL:
- Proxy server: `https://proxy-server-three-chi.vercel.app/` with the end point `/api/openai`.

## Project Structure

- `investing-news-analyzer/`: The Chrome extension source code.
- `index.js`: The proxy server code to handle requests to the OpenAI API.
- `.env.example`: Example environment file with placeholder for the OpenAI API key.
- `.gitignore`: A file to ignore unnecessary files from being tracked by Git.
- `README.md`: Documentation on how to set up and use the project.

## Troubleshooting

- If the extension doesn't work properly, make sure you are on a page within the **Forex News** section of Investing.com.
- Ensure your OpenAI API key is correctly configured in the `.env` file (if using your own key).

## License

This project is licensed under the MIT License

## Contributing

Feel free to open issues and submit pull requests if you find bugs or have suggestions for improvements.
```
