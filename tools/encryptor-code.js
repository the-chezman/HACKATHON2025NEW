passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@!()*$";

function generatePassword() {
    let length = document.getElementById("password-length").value;
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        let selectedChar = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        generatedPassword = generatedPassword + selectedChar;
    }
    document.getElementById("newPassword").innerHTML = generatedPassword;
}