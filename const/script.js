
let pi = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius");



document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myAnswer").textContent = `${circumference} cm`; 
    
    console.log(circumference)
}
