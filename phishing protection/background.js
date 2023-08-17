// background.js

const phishingUrls = [
    ,
    
    
  ];
  
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = new URL(details.url);
      const hostname = url.hostname;
  
      if (phishingUrls.includes(hostname)) {
        // Cancel the request and show a warning
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  