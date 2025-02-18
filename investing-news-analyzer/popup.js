document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['analysisResult'], function(result) {
    document.getElementById('result').innerHTML = result.analysisResult || 'No analysis available.';
  });
});
