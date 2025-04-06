
// let day = "pizza";

// switch (day) {
//      case 1:
//         console.log("It's Monday");
//         break;
//     case 2:
//         console.log("It's Tuesday");
//         break;
//     case 3:
//         console.log("It's Wednesday");
//         break;
//     case 4:
//         console.log("It's Thursday");
//         break;
//     case 5:
//         console.log("It's Friday");
//         break;
//     case 6:
//         console.log("It's Saturday");
//         break;
//     case 7:
//         console.log("It's Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day in the week`)
// }



let gradeScore = 57;
let gradeLetter;

switch (true) {
    case gradeScore >= 90:
        gradeLetter = "A";
        break;
    
    case gradeScore >= 80:
        gradeLetter = "B";
        break;
    
    case gradeScore >= 70:
        gradeLetter = "C";
        break;
    
    case gradeScore >= 60:
        gradeLetter = "D";
        break;
    
    case gradeScore >= 50:
        gradeLetter = "E";
        break;
    
    default:
        gradeLetter = "F";

}

console.log(gradeLetter)