const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", greetUser);

function greetUser() {
    alert("Hello World!")
}

const bg = document.getElementById("bg");

bg.addEventListener("change", swapBg);

function swapBg() {
    // images folder contains bricks.jpg, flowers.jpg, etc
    let newUrl = "images/" + bg.value + ".jpg";
    // set the CSS of the body to the new background images
    document.body.style.backgroundImage = "url(newURL)";
}

var firstName = "Joe";

firstName = "Bill"; // no promblem changing the value of the string

firstName = 789; // can even change the datatype

firstName = ["Bill", "Jane"]; // first string, then number, now array


const firstName = "Jane";

firstName = 456; // Error! Cannot change the datatype of a const

firstName = "Janet"; // Error! Cannot change string decalred as const


var examResult = 88;

examResult = "B+"; // number to string - not a problem with var


const pi = 3.1415;
pi = 3.1416; // Error! Cannot change number, not even by 0.0001



