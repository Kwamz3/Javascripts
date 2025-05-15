// const hello = function () {
//     console.log("Hello");
// };

// hello();

// function cardScan(callback, delay) {
//     console.log("Scanning...");

//     setTimeout(function () {
//         callback();
//     }, delay);
// };

// cardScan(function () {
//     console.log("Approved!...yeeeeyaaaaahhhhhh")
// }, 3000);

// function cardScan(callback, delay) {
//     console.log("Scanning card...");
    
//     setTimeout(function () {
//         callback();
//     }, delay);
// }

// cardScan(function () {
//     console.log("Scan completed!");
// }, 3000);

// setTimeout(function () {
//     console.log("It'll take some time")
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(function (element) {
//     return Math.pow(element, 2);
// });

// console.log(squared);

const numbers = [1, 2, 3, 4, 5, 6];
const cubed = numbers.map(function(element) {
    return Math.pow(element, 3);
});

console.log(cubed);

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNums = cubed.filter(function (element) {
    return element % 2 === 0;
});

console.log(evenNums);

const oddNums = numbers.filter(function (element) {
    return element % 2 === 1;
});

console.log(oddNums);

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});

console.log(total)