//Make a button, div and images that, when clicked, calls a function:

//- get the value of a text input field. This gives us the user’s first name

var firstName = document.getElementById("firstName").value;

//- get the current date-time from the user’s computer

var dateTime = new Date();

//- gets the current hour and minute and concatenates the time for output

var hours = dateTime.getHours();

var minutes = dateTime.getMinutes();

var currentTime = hours + ":" + minutes;

//- if the minute is less than 10, concatenate a leading zero : minute = “0” + minute

if (minutes < 10) {
    minutes = "0" + minutes;
} // end if

//- runs the hour through an if-else if-else block to choose the correct Good— greeting

var goodSomething = "";

if (hour < 12) {
    goodSomething = "Good Morning"
} else if (hour < 17) {
    goodSomething ="Good Afternoon"
} else {
    goodSomething = "Good Evening"
} // else if

// - Concatenates and outputs a “timely” greeting, such as

var timelyGreeting = goodSomething + firstName ". The time is now " + currentTime + "."

//Make a color picker or select object that when changed, calls a function



//Declare local and global variables for strings and numbers.

var globalScope = "Hola!";

var globalNum = 760;

function someFunction() {
    var localScope = "Howdy!"
    var localNum = 100;
}

/* Inside a function, you should be able to:
   - increment numbers */ 

function someFunction() {
    for(var i=0; i < 10; i++)
    loopy.innerHTML += i + "";
}

  

// - run if-else statements to evaluate arguments

function someFunction() {
    if (z == 1) {
        alert("IF statement is True");
    } else if (z == 2) {
        alert("ELSE IF statement is True");
    } else {
        alert("Neither statement is True, so here we are");
    } // end if else
} // end someFunction()


// - concatenate strings
    
function someFunction() {
    var firstName = document.getElementById("firstName");
    var greeting = "hello";
    
    var outputH3 = document.getElementById("myh3");
    
    outputH3.innerHTML = greeting + firstName + ".";
    
}

// - output content



  

/* Write the javascript for a simplified voting application. For this example, use pets(cats, dogs and bunnies) as the categories instead of film genres. Your application should be able to:
- Tally the votes for each category as well as the total votes
- Determine which type of pet received the most recent vote
- Output the vote totals for each category as well as the totals to an h3 with an id of outputH3 */

//Global Variables available to all function

var totalVotes = 0;
var catVotes = 0;
var dogVotes = 0;
var bunnyVotes = 0;


// an h3 receiving the output from several functions

var myH3 = document.getElementById("myH3");

    
// Determine which type of pet received the most recent vote

function voteForPet(pet) {
    totalVotes++;
    if( pet == "cat") {
        catVotes++;
    } else if (pet == "dog") {
        dogVotes++;
    } else { // pet must be bunny
        bunnyVotes++;
    }
    
    myH3.innerHTML = "So you're a" + pet + "person!<br/> Here are the Vote Totals. <br/>Cats:" + catVotes + "<br/> Dogs:" + dogVotes + "<br/> Bunnies:" + bunnyVotes;
}  // end voteForPet(pet) 
    

/* For each of the following prompts, create functions which perform the operations described

 - Looks at an incoming argument to decide which element called the function, and therefore, which part of an if-else statement will be run. */

if ( pet == "cat") {
    catVotes++;
} else (pet == "bunny") {
    bunnyVotes;
} // end if else
    


//- Gets the values from 2 number input fields(ids of num1 and num2, adds them together and outputs the result to an an HTML element with an id of outputH3.Remember you need to convert the input strings to a numeric variable type to run calculations on them properly.
          
function caluclate() {
    var num1 = document.getElementById("num1").value;
    num1 = Number(num1);
    var num2 = document.getElementById("num2").value;
    num2 = Number(num2);
    
    var sum = num1 + num2;
    
    document.getELementById("myH3").innerHTML = num1 + "+" + num2 + "=" + sum;
}


//- Generate a number between 20000 and 50000, and output it to look like a car price.

var randomNumber = Math.floor(20000 + Math.random() * 30000);
outputH3.innerHTML = "Toyota: $" + randomNumber;


//- Sets the CSS properties, such as width and background color of any HTML element.

div.style.width = "250px";
div.style.backgroundColor = "aqua";



//- Generate a number between 10 and 100, and increase the width of a div by that much.

var randNum = Math.floor(90 + Math.random() * 10);
div.style.widh = randNum + "px;"



//- Runs a loop and outputs a counter variable to an HTML element

var counter = 0;

for (var i = 0; i < 10; i++)
    counter++;
    outputH3.innerHTML = "" + counter;


//- Runs a loop that iterates an array, concatenates a message using each array element, and outputs the result to an HTML element

var msg = "";

var myElement = document.getElementById("myH3");
    for(var i=0; ary.length; i++;)
        msg =+ ary[i];
      myElement.innerHTML = msg;

//- Runs a loop that iterates an array, subjects each array element to the condition of an if-statement, and pushes (adds) those elements that pass the if-test to another array

var newAry = 



//- Toggles output based on a boolean: every time the function runs the boolean is switched from true to false, back to true



//- Keeps track of total clicks (like votes). Be able to put three pet pictures (cat, dog and rabbit) on the screen and keep track of how many times each is clicked on and display the percent of each “vote”.

//Global Variables available to all function



// an h3 receiving the output from several functions


    
    




// 1.Use modulus and if statements to output true if the parameter for the function is odd and false if it is even.



/* 2. Use modulus and if statements to check if a given year is a leap year. Leap years occur every 4th year, don’t occur every 100th year except if it’s also a 400th year. Example leap years:
- 1204, 1308, 2004, 1600, 32, 30204
  Not leap years:
- 2013, 2007, 1900, 1800, 3037 */





// 3. Use a for loop to calculate the average of an array of integers.



// 4. Use a for loop to copy the contents of an array into a new array.






/* 5. Write a function that outputs the following grid into the console:
	- - - - - - - - - -                                                                                           
	- - - - - - - - - -                                                                                           
	- - - - - - - - - -                                                                                           
	- - - - - - - - - -  */

