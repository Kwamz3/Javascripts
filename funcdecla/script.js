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

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function (element) {
    return Math.pow(element, 2);
});

console.log(squared);
