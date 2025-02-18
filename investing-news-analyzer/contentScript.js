setTimeout(() => {
  const newsElement = document.querySelector("div.article_container");
  if (newsElement) {
    const newsText = newsElement.innerText;
    chrome.runtime.sendMessage({ type: 'analyze_news', text: newsText });
  } else {
    console.error("Impossible to find the content of the news!");
  }
}, 3000);
