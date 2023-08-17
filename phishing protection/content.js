// content.js

// Inject a warning message
const warningMessage = document.createElement("div");
warningMessage.innerText = "Warning: This might be a phishing site!";
warningMessage.style.background = "red";
warningMessage.style.color = "white";
warningMessage.style.padding = "10px";
warningMessage.style.position = "fixed";
warningMessage.style.top = "0";
warningMessage.style.left = "0";
warningMessage.style.zIndex = "9999";

document.body.appendChild(warningMessage);
