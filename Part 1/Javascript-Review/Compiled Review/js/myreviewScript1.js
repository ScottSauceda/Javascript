//Make a button, div and images that, when clicked, calls a function:

//- get the value of a text input field. This gives us the user’s first name

var userName = document.getElementById("firstName").value;

//- get the current date-time from the user’s computer

var currentTime = new Date();

//- gets the current hour and minute and concatenates the time for output

var hours = currentTime.getHours();

var minutes = currentTime.getMinutes();

//- if the minute is less than 10, concatenate a leading zero : minute = “0” + minute
if (minutes < 10) {
                minutes = "0" + minutes;
            }

//- runs the hour through an if-else if-else block to choose the correct Good— greeting

if (hours < 12) {
                timelyGreeting = "Good Morning";
            } else if (hours < 17) {
                timelyGreeting = "Good Afternoon";
            } else {
                timelyGreeting = "Good Evening";
            }

//- Concatenates and outputs a “timely” greeting, such as

var greeting = timelyGreeting " " + userName + ". The time is " + hours + ":" + minutes;

document.getElementById("myH3").innerHTML = greeting;

//Make a color picker or select object that when changed, calls a function

//Declare local and global variables for strings and numbers.
var myGlobalVar = "Pizza";
var myGlobalNum = 3;
function scopedFunction(){
	var myLocalVar = "Local Favorite";
	var myLocalNum = 5;
}


/* Inside a function, you should be able to:
   - increment numbers */ 
  
function skillSet() {
    for (var i = 0; i < 10; i++)
        loopy.innerHTML += i + " ";
}

// - run if-else statements to evaluate arguments

if(z==1) {
    alert("IF statement is TRUE");
}  else if (z==2) {
    alert("ELSE if statement is TRUE");
}  else {
    alert("Both conditions were False, so here we are");
}

// - concatenate strings

var message = firstName + "likes" + favoriteFruit + "."
// (`${firstName} likes ${favoriteFruit}.`)

// - output content

document.getElementById("boxy").innerHTML = msg;

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

var divvy = document.getElementById("divvy");
var outputH3 = document.getElementById("outputH3");

function voteForPet(pet) {
    totalvotes++;
    if(pet == "cat"); {
        catVotes++;
    } else if (pet == "dog") {
        dogVotes++;
    } else { // pet must be bunny
        bunnyVotes++;
    } // end if-else
    
    outputH3.innerHTML = "So! You're " + pet + "person </br> Here are the vote Totals:<br/>Cats:" + catVotes + "<br/>Dogs: " + dogVotes + "<br/>Bunny:" + bunnyVotes;    
}   // end voteForPet() function

/* For each of the following prompts, create functions which perform the operations described

 - Looks at an incoming argument to decide which element called the function, and therefore, which part of an if-else statement will be run. */

if (pet == "cat") {
    catVotes ++;
} else { // pet must be "bunny"
    bunnyVotes ++;
} // end if else

//- Gets the values from 2 number input fields(ids of num1 and num2, adds them together and outputs the result to an an HTML element with an id of outputH3.Remember you need to convert the input strings to a numeric variable type to run calculations on them properly.

function calculate() {
    
    var num1 = document.getElementById("num1").value;
    
    num1 = Number(num1);
    
    var num2 = document.getElementById("num2").value;
    
    num2 = Number(num2);
    
    var sum = num1 + num2;
    
    document.getElementById("myDiv").innerHTML = num1 + " + " + num2 + " = " + result;
    
} // end calculate()

//- Generate a number between 20000 and 50000, and output it to look like a car price.

var randomNumber = Math.floor(20000 + Math.random() * 30000);
outputH3. innerHTML = "Toyota: $" + randomNumber;

//- Sets the CSS properties, such as width and background color of any HTML element.

div.style.width = "10px";
div.style.backgroundColor = "aqua";

//- Generate a number between 10 and 100, and increase the width of a div by that much.

var randNum = Math.floor(90 + Math.random () * 10);
div.style.width = randNum + "px";

//- Runs a loop and outputs a counter variable to an HTML element

var counter = 0;
for (var i = 0; i < 10; i++);
      counter ++;
       document.getElementById("myH3").innerHTML = "" + counter;

//- Runs a loop that iterates an array, concatenates a message using each array element, and outputs the result to an HTML element

var msg = "";

var myElement = document.getElementById("myH3");
    for(var i=0; ary.length; i++)
        msg += ary[i];
    myElement.innerHTML = msg;

//- Runs a loop that iterates an array, subjects each array element to the condition of an if-statement, and pushes (adds) those elements that pass the if-test to another array

var newAry = [];
  for(var i=0; i < ary.length; i++)
      if(condition == true)
          newAry.push(ary[i]);

//- Toggles output based on a boolean: every time the function runs the boolean is switched from true to false, back to true

function toggleBool() {
    if(myFlag) {
        myFlag = false;
    } else {
        myFlag = true;
    }
}

//- Keeps track of total clicks (like votes). Be able to put three pet pictures (cat, dog and rabbit) on the screen and keep track of how many times each is clicked on and display the percent of each “vote”.

//Global Variables available to all function

var totalVotes = 0;
var catVotes = 0;
var dogVotes = 0;
var bunnyVotes = 0;

// an h3 receiving the output from several functions

var divvy = document.getElementById("divvy");
var outputH3 = document.getElementById("outputH3");

function voteForPet(pet) {
    totalvotes++;
    if(pet == "cat"); {
        catVotes++;
    } else if (pet == "dogVotes") {
        dogVotes++;
    } else { // pet must be bunny
        bunnyVotes++;
    } // end if-else
    
    outputH3.innerHTML = "So! You're " + pet + "person </br> Here are the vote Totals:<br/>Cats:" + catVotes + "<br/>Dogs: " + dogVotes + "<br/>Bunny:" + bunnyVotes;    
}   // end voteForPet() function





// 1.Use modulus and if statements to output true if the parameter for the function is odd and false if it is even.

var num = 50;

function isOdd(numInput) {
    if(numInput % 2 != 0){
        console.log("True");
    } else {
        console.log("False");
    } // end if else
} // end isOdd(numInput)

/* 2. Use modulus and if statements to check if a given year is a leap year. Leap years occur every 4th year, don’t occur every 100th year except if it’s also a 400th year. Example leap years:
- 1204, 1308, 2004, 1600, 32, 30204
  Not leap years:
- 2013, 2007, 1900, 1800, 3037 */

var areLeapYears = [1204,1308,2004,1600,32,30204, 2000, 1784, 1768];

var areNotLeapYears = [2013, 2007, 1900, 1800, 1500, 1400, 67, 3083];

var testData = 1200;

function leapYearCheck(year) {
    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                console.log(`${year}IS a leap year.`);
            } else {
                console.log(`${year}is NOT a leap year.`);
            }
        }else {
            console.log(`${year}IS a leap year.`);
        }
    } else {
        console.log(`${year}is NOT a leap year.`)
    }
} // end leapYearCheck(year)

function leapYearTest(){
    console.log("Expected Leap years:");
    for(var i = 0; i < areLeapYears.length; i++);{
        leapYearCheck(areLeapYears[i]);
    }
    console.log("Expected non-leap years:");
    for(var i = 0; i < areNotLeapYears.length; i++){
        leapYearCheck(areNotLeapYears[i]);
    }
}

// 3. Use a for loop to calculate the average of an array of integers.

var intAry = [5,2,7,8,3,2];
var sum = 0;

function findAvg(aryInput){
    for(var i=0; i < aryInput.length; i++){
        sum += aryInput[i];
    } // end for
    var avg = sum/aryInput.length;
    console.log(`Sum is: ${sum}\nAverage is: ${avg}`);
} // end findAvg(aryInput)


// 4. Use a for loop to copy the contents of an array into a new array.

var firstAry = ["some", "stuff", "my", "array!"];
var copiedAry = [];

function copyArray(){
    for(var i = 0; i < firstAry.length; i++){
        copiedAry.push(firstAry[i]);
    } // end for
} // end copyArray()

console.log(firstAry);
console.log(copiedAry);


/* 5. Write a function that outputs the following grid into the console:
	- - - - - - - - - -                                                                                           
	- - - - - - - - - -                                                                                           
	- - - - - - - - - -                                                                                           
	- - - - - - - - - -  */

var width = 10;
var height = 10;
function printDashedGrid(inWidth, inHeight) {
    var outString = "";
    for(var j = 0; j < inHeight; j++) {
        for(var i = 0; i < inWidth; i++){
            outString += "- ";
        }
        
        outString += "\n";
    }
    
    console.log(outString);
} // end printDashedGrid