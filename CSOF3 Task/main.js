// Initialising the variables of elements that are rendered on the app:
let counter = document.getElementById("counter");
let incBtn = document.getElementById("incBtn");
let resetBtn = document.getElementById("resetBtn");
let decBtn = document.getElementById("decBtn");
let input = document.getElementById("input");

// Initialising the variable that keeps track of the user input:
let count = 0;

// Button that increments counter by 1:
incBtn.addEventListener('click', () => {
    // Changed the value of the input into a float, as p tag values will concatenate numbers instead of adding them, due to the fact all innerHTML values are identified as Strings:
    count += parseFloat(input.value);
    counter.innerHTML = count;
})

// Button that decrements counter by 1:
decBtn.addEventListener('click', () => {
    count -= parseFloat(input.value);
    counter.innerHTML = count;
})

// Button that resets counter to 0:
resetBtn.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
})

