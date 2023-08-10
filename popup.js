document.addEventListener('DOMContentLoaded', function () {
    const websiteInput = document.getElementById('website');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveButton = document.getElementById('saveButton');
    const passwordList = document.getElementById('passwordList');
  
    saveButton.addEventListener('click', function () {
      const website = websiteInput.value;
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      if (website && username && password) {
        // Save password to Chrome storage (this is a simplified example)
        chrome.storage.local.get('passwords', function (data) {
          const passwords = data.passwords || [];
          passwords.push({ website, username, password });
          chrome.storage.local.set({ passwords });
          renderPasswordList(passwords);
        });
  
        // Clear inputs
        websiteInput.value = '';
        usernameInput.value = '';
        passwordInput.value = '';
      }
    });
  
    function renderPasswordList(passwords) {
      passwordList.innerHTML = '<h3>Saved Passwords:</h3>';
      passwords.forEach(function (password, index) {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
          <p><strong>${password.website}</strong></p>
          <p>Username: ${password.username}</p>
          <p>Password: ${password.password}</p>
          <button class="deleteButton" data-index="${index}">Delete</button>
        `;
        passwordList.appendChild(listItem);
      });
  
      const deleteButtons = document.querySelectorAll('.deleteButton');
      deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          const index = parseInt(button.dataset.index);
          chrome.storage.local.get('passwords', function (data) {
            const passwords = data.passwords || [];
            passwords.splice(index, 1);
            chrome.storage.local.set({ passwords });
            renderPasswordList(passwords);
          });
        });
      });
    }
  
    // Load passwords from Chrome storage on page load
    chrome.storage.local.get('passwords', function (data) {
      const passwords = data.passwords || [];
      renderPasswordList(passwords);
    });
  });
  