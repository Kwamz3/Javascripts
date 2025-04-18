// function commonsEye(...things) {
//     console.log(things);
// }


// let thing1 = "computers";
// let thing2 = "book";
// let thing3 = "phones";
// let thing4 = "pods";
// let thing5 = "mouse";

// commonsEye(thing1, thing2, thing3, thing4, thing5)

// function commonsEye(...things) {
//     console.log(...things);
// }

function commonsEye(...things) {
    return things
}

let thing1 = "book"
let thing2 = "mouse"
let thing3 = "phone"
let thing4 = "pods"
let thing5 = "laptop"

const thing = commonsEye(thing1, thing2, thing3, thing4, thing5);
console.log(thing);

