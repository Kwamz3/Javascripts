const numbers = [1, 2, 3, 4, 5];
const students = ["KWAME", "SAMUEL", "KWABS", "SINCLAIR"];
const dates = ["2024-1-10", "2026-4-6", "2052-14-11"];

// const squared = numbers.map(square);
// console.log(squared);
// function square(element) {
//     return Math.pow(element, 2)
// };

// const cubed = numbers.map(cube);
// console.log(cubed)
// function cube(element) {
//     return Math.pow(element, 3)
// };

// const toUpperSt = students.map(toUpper);
// console.log(toUpperSt);
// function toUpper(element) {
//     return element.toUpperCase();
// };

// const toLowerSt = students.map(toLower);
// console.log(toLowerSt);
// function toLower(element) {
//     return element.toLowerCase()
// };

const formatteddates = dates.map(formatdates);
console.log(formatteddates);
function formatdates(element) {
    let parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}