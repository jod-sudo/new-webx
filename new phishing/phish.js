document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggleSwitch");
    toggleSwitch.addEventListener("change", function() {
      chrome.runtime.sendMessage({ type: "toggle" });
    });
  });
  