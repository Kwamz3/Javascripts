let fruits = ["apple", "banana", "orange", "coconut", "pear"];

// fruits.pop();
// fruits.unshift("mango");
// fruits.push("guava");

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);

// let index = fruits.indexOf("banana")
// let numOFArray = fruits.length
// console.log(numOFArray);

// for (let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

fruits.sort().reverse();
for (let fruit of fruits){
    console.log(fruit);
}