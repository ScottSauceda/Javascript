//alert("hello world");
var faveOutput = document.getElementById("faveOutput");
function faveFruit() {
    var faveFruit = document.getElementById("faveFruit").value;
    var msg = `${faveFruit}! What an excellent choice for your favorite fruit!`;
//    faveOutput.innerHTML = msg;
}

////////////////// Algorithm: logical problem solving flow of a computer program.


/*

Calculator app Algorithm:

- Allow the user to input a number

- Retrieve the number and store it somewhere (in a variable).

- Allow the user to choose an operator: addition, subtraction, multiplacation, etc.

- Store that mathematical operator in another variable.

- Let the user enter a second number. This too must be saved in yet another variable.

- Wait for the user to click the = button. When they do, calculate the answer.

- Once the answer has been obtained, output it to the screen for the user to see.

- Oh, and also allow the user to start fresh at any time by clicking a Clear button.

*/


//////////////////////// Color Picker Application

/* 

- runs onchange to a color picker (input element of type ="color");
- <input type = "color" onchange ="changeColor()">
- and retrieves the chosen color
- applies that color as the CSS background color of the div
    Random Color Generator Application:
    We will write a function called randomColor() that:
- runs onclick of a button:
<button onclick ="randomColor()">Set Random Color</button>
- generates 3 random numbers from 0 -255, on each for R, G, and B.
- concatenates the values into an RGB color: rgb(22, 33, 44)
- uses the color to change the CSS background color of the div.

*/

function changeColor() { // runs whenever a color is chosen
    // get the color value that the user just chose
    var colorValue = document.getElementById("colorPicker").value;
    
    // get the div box, so we can change its bg color
    var colorDiv = document.getElementById("colorDiv");

    // set the backgroundColor property of the div
    colorDiv.style.backgroundColor = colorValue;
    
    //output the hex color value
    var newColor = document.getElementById("newColor").innerHTML = colorValue;
}

function setRandomColor() {
//    var R = Math.floor(Math.random() * 256);
//    var G = Math.floor(Math.random() * 256);
//    var B = Math.floor(Math.random() * 256);
//    
//    var randomColor = `rgb(${R}, ${G}, ${B})`;
    
//    colorDiv.style.backgroundColor = randomColor;

    var randHex = '#' + Math.floor(Math.random() * 16777216).toString(16);
    
    colorDiv.style.backgroundColor = `${randHex}`;
    newColor.innerHTML = randHex;
    
    
    
}