function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol) {
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumberChars = "0123456789";
    const SymbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? UppercaseChars : "";
    allowedChars += includeNumber ? NumberChars : "";
    allowedChars += includeSymbol ? SymbolChars : "";

    if (length <= 0 ) {
        return "(C'mon bruhhhhh... that's too lowwwwww)";
    }
    if (allowedChars === 0) {
        return "(Nothing is selected...gotta do better bro)";
    }
    for (let i = 0; i <= length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 9;
const includeLowercase = false;
const includeUppercase = true;
const includeNumber = true;
const includeSymbol = false;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbol);

console.log(`Generated password:${password}`);