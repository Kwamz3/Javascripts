const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + (minNum);
let guess;
let attempts = 0;
let running = true;

do{
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}:`));

    if (isNaN(guess)) {
        window.alert("Please enter a valid number!");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number!");
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("mmm...Too lowwww. Try again");
        }
        else if (guess > answer) {
            window.alert("nerhhh...Too highhhh. Try again");
        }
        else {
            window.alert(`Correct!! The answer is ${answer}. It took you ${attempts} attempts to guess it`);
            running = false;
        }
    }
    
}while (running)