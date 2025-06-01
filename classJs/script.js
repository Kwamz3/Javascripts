// class Product{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     };

//     displayProduct() {
//         console.log(`Your product: ${this.name}`);
//         console.log(`Your price: $${this.price.toFixed(2)}`);
//     };

//     calculateTax(salesTax) {
//         return this.price + (this.price * salesTax);
//     }

// };

// const salesTax = 0.05;

// const product1 = new Product("shirt", 23);
// product1.displayProduct();
// const total = product1.calculateTax(salesTax);
// console.log(`SalesTax included: $${total}`);

// const product2 = new Product("blouse", 45);
// product2.displayProduct();

// class Product{
//     constructor(name, car) {
//         this.name = name;
//         this.car = car;
//     };

//     displayProduct() {
//         if (this.name === "Charles" && this.car === "aventador") {
//             console.log(`Hey ${this.name}, you can have your ${this.car} back`);
//         }
//         else {
//             console.log(`Sorry ${this.name}, your ${this.car} isn't included`)
//         }
//     }
// };

// const findCar1 = new Product("Charles", "Toyota");
// findCar1.displayProduct();
// const findCar2 = new Product("Charles", "aventador");
// findCar2.displayProduct();

class officeAccess{
    constructor(name, username, pin) {
        this.name = name;
        this.username = username;
        this.pin = pin;
    };

    displayInfo() {
        if (this.username.includes(".121")) {
            console.log(`Hi there ${this.name}, you are in the company`);
        } else {
            console.log(`Sorry ${this.name}, your data isn't found in the company`)
        }
    };

    displayPin() {
        if (this.pin.length >= 5 || this.pin.length <= 3) {
            console.log("Invalid Pin!")
        } else {
            console.log("Pin set!")
        }
    };
};

const person1 = new officeAccess("Charles", "cd@.121start", "2456");
person1.displayInfo();
person1.displayPin()

const person2 = new officeAccess("Feebie", "cd@345", "5477");
person2.displayInfo();
person2.displayPin();