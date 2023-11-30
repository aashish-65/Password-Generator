function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let pass = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      pass += charset.charAt(randomIndex);
    }

    return pass;
  }

  function copyPass() {
    const passwordBox=document.getElementById("password");
    passwordBox.select();
    passwordBox.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(passwordBox.value);
  }

  function generatePassword() {
    const passwordLength = 12; // You can change the length as needed
    const password = generateRandomPassword(passwordLength);
    document.getElementById('password').value = password;
  }