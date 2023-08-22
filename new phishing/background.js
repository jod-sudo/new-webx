let blockingEnabled = true;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "toggle") {
    blockingEnabled = !blockingEnabled;
    updateBlockingState();
  }
});

function updateBlockingState() {
  if (blockingEnabled) {
    chrome.webRequest.onBeforeRequest.addListener(
      blockPhishing,
      { urls: ["*://*.example.com/*"] },
      ["blocking"]
    );
  } else {
    chrome.webRequest.onBeforeRequest.removeListener(blockPhishing);
  }
}

function blockPhishing(details) {
  return { cancel: true };
}

updateBlockingState();
