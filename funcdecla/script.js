// const hello = function () {
//     console.log("Hello");
// };

// hello();

function cardScan(callback, delay) {
    console.log("Scanning...");

    setTimeout(function () {
        callback();
    }, delay);

};

cardScan(function () {
    console.log("Scan completed!")
}, 3000)

// function cardScan(callback, delay) {
//     console.log("Scanning card...");
    
//     setTimeout(function () {
//         callback();
//     }, delay);
// }

// cardScan(function () {
//     console.log("Scan completed!");
// }, 3000);