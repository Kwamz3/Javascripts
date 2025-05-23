// const hello = function hello () {
//     console.log("hello!")
// };

// hello();

// const caller = () => console.log("Hello");

// caller();

// const myName = (name, age) => {
//     console.log(`Hello ${name}`);
//     console.log(`You are ${age} years old`)
// }

// myName("Charles", "8")

// setTimeout(hello, 3000);

// function hello() {
//     console.log("Hello!")
// };

// setTimeout(function () {
// console.log("My name is Charles")
// }, 3000)

// setTimeout(() =>
// { console.log(`My name is Charles`) }, 3000)

// const numbers = [1, 2, 3, 4, 5, 6];
// const squared = numbers.map((element) => Math.pow(element, 2))

// console.log(squared);

const numbers = [1, 2, 3, 4, 5, 6];
const cubed = numbers.map((element) => Math.pow(element, 3));

console.log(cubed);

const evenNums = cubed.filter((element) => element % 2 === 0)
console.log(evenNums)

const oddNums = cubed.filter((element) => element % 2 !== 0)
console.log(oddNums)

const sumNums = cubed.reduce((accummulator, element) => accummulator + element)
console.log(sumNums)