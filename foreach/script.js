// let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange", "coconut"];

// numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(square);
// numbers.forEach(cube);
// fruits.forEach(upperCase);
// fruits.forEach(lowerCase);
fruits.forEach(capatilize);
fruits.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function triple(element, index, array) {
//     array[index] = element * 3;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//     array[index] = Math.pow(element, 3);
// }

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase()
// }

// function lowerCase(element, index, array) {
//     array[index] = element.toLowerCase()
// }

function capatilize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}
function display(element) {
    console.log(element);
}