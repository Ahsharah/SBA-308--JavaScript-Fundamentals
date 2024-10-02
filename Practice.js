// Function to create the specififed DOM structure
function createDOMStructure(){
    // Create the first div and ordered list
    const div1 = document.createElement('div');
    const ol = document.createElement('ol');

// Create and append 3 (ordered) list items to the list
for (let i = 0; i <3; i++){
    const li = document.createElement('li');
    ol.appendChild(li);
}

// Append the (ordered) list to the first div
div1.appendChild(ol);

// Create the second div and unordered list
const div2 = document.createElement('div');
const ul = document.createElement('ul');

// Create and append 3 list items to the unordered list
for (let i = 0; i < 3; i++){
    const li = document.createElemet ('li');
    ul.appendChild(li);
}

// Append the unordered list to the second div
div2.appendChild(ul);

// Append both divs to the body
document.body.appendChild(div1);
document.body.appendChild(div2)

}

// Call the function to crate the structure
createDOMStructure();


//Description: Write a function named greet that takes a person's name as an argument and returns a greeting message with their name.
/*1:54
ex greet('jose') ''Hello, Jose"
1:55
2. Square a number
ex square(4)  => 16
1:57
3. Convert Minutes to seconds
ex: convertToSeconds(2) => 120
1:57
4. Simple calculator
Description: write a function calculate that takes in 3 arguments: 2 numbers and a string representing the arithmetic operator ('*', '+', '-', '/').
The function should perform the corresponding operation and return the result.
Ex
calculate(1, 3, '-') => -2
calculate(5, 2 '*') => 10 (edited)*/