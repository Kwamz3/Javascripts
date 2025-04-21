function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? upercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password length too small merhn...add some mooooooooreeee)`
    }
    if (allowedChars === 0) {
        return `(Nothing is selected..?? tf!!)`
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

console.log(`Generated password: ${password}`)