// sayHello(sayLeave);

// function sayHello(callback) {
//     console.log("hello!");
//     callback();
// }

// function sayLeave() {
//     console.log("Leave!");
// }

// function saygoodbye() {
//     console.log("goodbye!");
// }

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 5, 8);

// function addusername(callback, x) {
//     let username = x + "@smail.com"
//     callback(username);
// }

// function showName(username) {
//     console.log(username);
// }

// addusername(showName, "Franklin")