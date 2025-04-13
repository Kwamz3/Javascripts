let fruits = ["apple", "banana", "orange", "coconut", "pear"];

// fruits.push("guava");
// fruits.pop();
// fruits.unshift("mango");

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

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

