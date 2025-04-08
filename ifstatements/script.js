
// let age = 18;
// let hasLicense = false;

// if (age >= 18) {
//     console.log("You're old enough to drive");

//     if (hasLicense) {
//         console.log("You have a license");
//     }
//     else {
//         console.log("You do not have a license");
//     }
// }
// else {
//     console.log("You are not old enough to drive");
// }

// const time = 14;

// if (time < 12) {
//     console.log("Good morning!")
// }
// else {
//     console.log("Good Afternoon!")
// }


// let isStudent = false;

// if (isStudent) {
//     console.log("No doubt, you are a student")
// }
// else {
//     console.log("Come on, you are not a student")
// }


const showText = document.getElementById("myInput");
const getAge = document.getElementById("mySubmit");
const showRessult = document.getElementById("resultAge");
let age;


getAge.onclick = function () { 
    
    age = showText.value;
    age = Number(age);

    if (age >= 100) {
        showRessult.textContent = `You are too old to enter this site`;
    }
    else if (age >= 18) { 
        showRessult.textContent = `You're old enough to enter this site`;
    }
    
    else if (age == 0) {
        showRessult.textContent = `You can not enter this site. You were just born`;}
    else if (age <= 0) { 
        showRessult.textContent = `Your age can not be 0`;
    }
    else {
        showRessult.textContent = `You are not old enough to enter this site`;
    }
}
