let array = [1, 2, 3, 4, 5];

array.forEach(display);

function double(element, index, array) {
    array[index] = element * 2
}

function display(element) {
    console.log(element)
}

array.forEach(double);
function double(element) {
    array = element * 2;
    console.log(array);
}

