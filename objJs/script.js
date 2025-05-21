// person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function () { console.log("Hi I'm Spongebob!") },
//     eat: () => console.log("I am eating a krabby Patty"),
// }

// person2 = {
//     firstName: "Ptrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: function () {console.log("Hey I'm Patrick!") },
//     eat: () => console.log("I am eating sand"),
// }

// person1.sayHello()
// person1.eat()
// person2.sayHello()
// person2.eat()

person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function () { console.log(`hello! I am ${this.name}`) },
    eat: function(){console.log(`I like to eat ${this.favFood}`)}
}

person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function () { console.log(`hello! I am ${this.name}`) },
    eat: function () {console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();