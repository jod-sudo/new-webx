// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "blockWarning") {
      displayWarningMessage();
    }
  });
  
  function displayWarningMessage() {
    // Create a warning message element
    const warningMessage = document.createElement("div");
    warningMessage.style.backgroundColor = "red";
    warningMessage.style.color = "white";
    warningMessage.style.padding = "10px";
    warningMessage.style.position = "fixed";
    warningMessage.style.top = "0";
    warningMessage.style.left = "0";
    warningMessage.style.width = "100%";
    warningMessage.style.zIndex = "9999";
    warningMessage.textContent = "Warning: This site has been blocked as a phishing site.";
  
    // Append the warning message to the page
    document.body.insertBefore(warningMessage, document.body.firstChild);
  }
  