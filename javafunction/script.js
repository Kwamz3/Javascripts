// function happyBirthday(username, age) {
//     console.log("Happy birthday to you");
//     console.log("Happy birthday dear you");
//     console.log(`Happy birthday to ${username}`);
//     console.log(`You're ${age} years old.`);
// }

// let myage = 13;
// happyBirthday("Ford", myage);

// console.log(typeof myage )


// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function divide(x, y) {
//     return x / y;
// }
// function multiply(x, y) {
//     return x * y;
// }

// console.log(add(4, 7));
// console.log(subtract(4, 7));
// console.log(multiply(4, 7));
// console.log(divide(4, 7));

// function isEven(number) {
//     number = Number(window.prompt("Enter your number"));
    
//     if (number % 2 === 0) {
//         console.log("This number is evenly EVen")
//     }
//     else {
//         console.log("bruhhhhhhhh...not so Even")
//     }
    
// }

// isEven();


// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// (console.log(isEven(4)));


// function isEven(number) {
//     return number % 2 === 0 ? true : false
// }

// console.log(isEven(40));


// function isValidEmail(email) {
//     if (email.includes("@")) {
//         return console.log("This is a valid email...lesssgoooooooo")
//     }
//     else {
//         return console.log("Marhn that's not valid")
//     }
// }

isValidEmail("Brogmail");
function isValidEmail(email) {
    
    return email.includes("@") ? true : false
}

console.log(isValidEmail("Bro@gmail"));