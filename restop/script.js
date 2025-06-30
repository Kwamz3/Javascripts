// function commonsEye(...things) {
//     console.log(things);
// }


// let thing1 = "computers";
// let thing2 = "book";
// let thing3 = "phones";
// let thing4 = "pods";
// let thing5 = "mouse";

// commonsEye(thing1, thing2, thing3, thing4, thing5)

function commonsEye(...things) {
    console.log(...things.join(", "));
}

// function commonsEye(...things) {
//     return things
// }

let thing1 = "book"
let thing2 = "mouse"
let thing3 = "phone"
let thing4 = "pods"
let thing5 = "laptop"

const thing = commonsEye(thing1, thing2, thing3, thing4, thing5);
// console.log(thing);

// function sumFunc(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// const total = sumFunc(3, 5, 56, 79, 89, 46, 69, 56);
// console.log(`Your total is $${total}`);

// function getAverage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(30, 80, 97, 65, 72);
// console.log(total);



// function combineStrings(...string) {
//     console.log(...string);
// }
// const fullName = combineStrings("Mr.", "SpongeBob", "SquarePants", "III");