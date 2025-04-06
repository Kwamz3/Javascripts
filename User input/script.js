

// let username = window.prompt("What's your username?");

// console.log(username);

let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myInput").value;
    document.getElementById("myH2").textContent = `Hello ${username}, I'm in the house`
}