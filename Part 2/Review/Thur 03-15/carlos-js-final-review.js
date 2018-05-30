/*
================================================
   Code Immersives Javascript Exam Practice
================================================

100 raw points - Partial Credit awarded 

The Fruit Loop

--------------------------------
Array Declaration (1 point each)
--------------------------------
*/

/*
Declare a JS array called fruits
Use const (not var).
Populate the array with the names of 10 fruits: apple, banana, cherry, kiwi, mango, pear, peach, plum, raspberry, strawberry 
All array values must be strings.

Declaration Syntax:
(const | var | let) VAR_NAME; // declares variable with no value
(const | var | let) VAR_NAME = VALUE; // declares variable with value
*/
const fruits = ["apple", "banana", "cherry", "kiwi", "mango", "pear", "peach", "plum", "raspberry", "strawberry"];

// On the next line, declare a new empty array called fruitsCopy
let fruitsCopy = [];

// On the next line, declare a new empty array called shortFruits
var shortFruits = [];

// On the next line, declare a new empty array called gradeAFruits
const gradeAFruits = [];

// On the next line, declare a new empty array called smoothieRecipes
var smoothieRecipes = new Array();


/*
--------------------------------
Array Methods (2 points each)
--------------------------------
Using array methods, add and remove items from the array. The result is ending up back where you started, with the original 10 fruits only.

syntax to use array methods: ARRAY_NAME.METHOD_NAME(OPTIONAL_ARGUMENTS)
*/

// Using an array method, add a new fruit to the end of the array.
fruits.push('lime');

// Using an array method, remove that fruit from the end the array.
fruits.pop();

// Using an array method, add a new fruit to the beginning of the array.
fruits.unshift('lemon');

// Using an array method, remove that fruit from the beginning the array.
fruits.shift();

/*
-------------------------------------------------
Iterate the Array with a For-Loop (2 points each)
-------------------------------------------------
*/

/*
Write a for-loop that iterates (goes through) the fruits array). Use let not var in the loop.
Each time through the loop, copy the fruit to fruitsCopy.
After the loop ends, log fruitsCopy to the console. The output should be all 10 fruits: apple, banana, cherry, kiwi, mango, pear, peach, plum, raspberry, strawberry
*/
for (let i = 0; i < fruits.length; i++) {
    fruitsCopy.push(fruits[i]);
}
console.log(fruitsCopy);

/*
Iterate the Array with a For-Loop (3 points each)
Write another for-loop that iterates the fruits array). Use let not var in the loop.
Each time through the loop, have an if statement check how many letters the fruit has. Copy each fruit that consists of no more than 5 letters to the shortFruits array.
After the loop ends, log shortFruits to the console. The output should be 6 of the 10 fruits: apple, kiwi, mango, pear, peach, plum
*/
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length < 6) {
        sho\\\
        
        rtFruits.push(fruits[i]);
    }
}
console.log(shortFruits);

/*
Iterate the Array with a For-Loop (3 points each)
Write another for-loop that iterates the fruits array). Use let not var in the loop.
Each time through the loop, have an if statement check if the fruit contains the letter “a”. Copy each fruit that includes the letter “a” to the gradeAFruits array.
After the loop ends, log gradeAFruits to the console. The output should be 7 of the 10 fruits: apple, banana, mango, pear, peach, raspberry, strawberry
*/

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].includes('a')) {
        gradeAFruits.push(fruits[i]);
    }
}
console.log(gradeAFruits);

/*
------------------------
Set Interval (3 points)
------------------------

Below is a function that rotates wheel, an image object, by 1 degree clockwise. The function is incomplete.
For 1 point each, completed the function by substituting ??A??,  ??B?? and ??C?? for the correct code snippet:

??A?? spinWheel() {
    wheel.??B??.transform = “rotate(1??C??)”;
}

??A?? function
??B?? style
??C?? deg
*/
function spinWheel() {
    wheel.style.transform = “rotate(1deg)”;
}

/*
------------------------------------------------
Making HTML Dynamically on a Loop (20 points)
------------------------------------------------

You are making an educational interface to teach the user how to count to 10 in Chinese.

You already have a container div to hold everything, a header for the text and an img tag to display the graphic, at left.
In an empty div with an id of numbers, we want to display 10 child divs, one for each number from 1-10, as shown, above.

Here is the HTML so far:

<div id=“container”>
    <header></header>
    <div id=“bigPic”></div>
    <div id=“numbers”></div>
</div>

Write this Javascript Code
*/

// Write a loop that creates 10 child divs, one for each number.
for (let i = 1; i < 11; i++) {
    let div = document.createElement('div');
    // Each div has just the number inside as text, as shown.
    div.innerHTML = i;
    // The loop must assign to each div an id equal to the counter variable of the loop.
    div.id = i;
    // Each div is clickable.
    div.addEventListener('click', onNumberClick);
    // Don’t forget to output each child div to the parent div.
    document.getElementById('numbers').appendChild(div);
}

let sound = new Audio();
function onNumberClick() {
    // Assume sound file names of 1.mp3, 2.mp3, 3.mp3, etc.
    sound.src = event.target.innerHTML + '.mp3';
    // When clicked the number is spoken in Chinese.
    sound.play();
}