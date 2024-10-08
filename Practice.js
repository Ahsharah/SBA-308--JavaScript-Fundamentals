// // Function to create the specififed DOM structure
// function createDOMStructure(){
//     // Create the first div and ordered list
//     const div1 = document.createElement('div');
//     const ol = document.createElement('ol');

// // Create and append 3 (ordered) list items to the list
// for (let i = 0; i <3; i++){
//     const li = document.createElement('li');
//     ol.appendChild(li);
// }

// // Append the (ordered) list to the first div
// div1.appendChild(ol);

// // Create the second div and unordered list
// const div2 = document.createElement('div');
// const ul = document.createElement('ul');

// // Create and append 3 list items to the unordered list
// for (let i = 0; i < 3; i++){
//     const li = document.createElemet ('li');
//     ul.appendChild(li);
// }

// // Append the unordered list to the second div
// div2.appendChild(ul);

// // Append both divs to the body
// document.body.appendChild(div1);
// document.body.appendChild(div2)

// }

// // Call the function to crate the structure
// createDOMStructure();


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




// Part 4  Adding Menu Interaction
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll("a");
// Add addEventListener
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
    // Log the content of the <a> element to verify the handler is working
    console.log("Link clicked:", event.target.textContent);
  }
  //adding an active class to "a" element
  //event.target.ClassList("active");
  //get the clicked <a> element
  const linkClicked = event.target;
  
  //Check if clicked linked <a> currently have an active class
  const IsActive = linkClicked.classList.contains("active");
  
  //removing an active class
  const allLinks = topMenuEl.querySelectorAll("a");
  allLinks.forEach((link) => {
    link.classList.remove("active");
  });
});

//Part 5 Adding Submenu Interactions
// Create a Helper function called buildSubmenu

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = " ";
  //iterate over sublinks array and create <a> element
  subLinks.forEach((link) => {
    const subLinksEl = document.createElement("a");
    //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    subLinksEl.setAttribute("href", link.href);
    //Set text property of the link for element textContent
    subLinksEl.textContent = link.text;
    //Append the new element to the subMenuEl
    subMenuEl.appendChild(subLinksEl);
  });
}