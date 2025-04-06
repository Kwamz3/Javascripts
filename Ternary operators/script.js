
// let age = 25;

// let beverage = age >= 18 ? console.log('You are an adult') : console.log('You are a minor');
// console.log(beverage);

// time = 9;
// let greeting = time < 12 ? console.log('Good morning') : console.log('Good afternoon');
// console.log(greeting);

// let isStudent = false;
// checkStudent = isStudent ? console.log('You are a student') : console.log('You are not a student');
// console.log(checkStudent);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
let discountPrice = purchaseAmount - purchaseAmount * (discount / 100);
console.log(`Your total is $${discountPrice}`);