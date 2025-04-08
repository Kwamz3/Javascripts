// const username = "Brocode";

// if (username === "") {
//     console.log("You DIDN'T enter your name")
// } else {
//     console.log(`Your name is ${username}`)
// }


// const drinkingAge = 18;

// while (drinkingAge > 18){
//   console.log(`You can't drink bossu`);
// }
// console.log("Drnk your heart out, gassssssman");


// let username;

// do {
//     username = window.prompt(`What is your name`)
// }while (username === "" || username === null)
// console.log(`Hey ${username}, what's good?`);


// const secretNumber = 7;
// let guess;

// do {
//     guess = window.prompt(`What is your guess`);
//     guess = Number(guess);
// }
// while (guess !== secretNumber)
// console.log(`Correct that's the answer!`);


// const codeA = "21GF2";
// let confirmC;

// do{
//     confirmC = window.prompt("Please enter the code");
//     console.log("Masaaaaa...Try again!")
// }
// while (confirmC !== codeA)
// console.log("Credentials approved");


// let loggedIn = false;
// let username;
// let password;

// do{
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if (username == "uSerName" && password == "PassWord") {
//         loggedIn = true;
//         console.log("You are logged in!")
//     } else {
//         console.log("Invalid credentials! Try again!")
//     }
// }while (!loggedIn)


// const secretNumber = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10
// let guess;
// let attempts = 0;
// const maxAttempts = 5;

// do {
//     guess = Number(prompt("Guess the secret number (1-10):"));
//     attempts++;

//     if (guess === secretNumber) {
//         console.log(`🎉 Nice! You guessed it in ${attempts} attempt(s)!`);
//         break;
//     } else if (guess < secretNumber) {
//         console.log("Too low! Try again.");
//     } else {
//         console.log("Too high! Try again.");
//     }

// } while (attempts < maxAttempts);

// if (guess !== secretNumber) {
//     console.log(`😢 Out of attempts! The secret number was ${secretNumber}.`);
// }


// const secretNumber = (Math.floor(Math.random() * 10) + 1);
// let guess = "";
// let attempts = 0;
// const maxAttempts = 5;

// while (guess < maxAttempts) {
//     guess = Number(window.prompt("Guess a number between 1-10:"))
//     attempts++;
//     if (guess == secretNumber) {
//         console.log("Great Job! That's the answer!");
//         console.log(`It took you ${attempts} attempts.`);
//         break;
//     } else if (guess < secretNumber) {
//         console.log("mmm... too low");
//     } else {
//         console.log("nerhh... too high");
//     }
// } if (attempts == maxAttempts) {
//     console.log(`You've run out of attempts... the correct answer was ${secretNumber}.`); 
// }