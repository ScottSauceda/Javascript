function greetUser() {
    var userName = document.getElementById("firstName").value;
    
    var dateTime = new Date();
    
    var hours = dateTime.getHours();
    
    var minutes = dateTime.getMinutes();
    
//    if (hours < 10) {
//        hours = "0" + hours;
//    }
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    var currentTime = hours + ":" + minutes;
    
    var goodSomething = "";
    
    if (hour < 12) {
        goodSomething = "Good Morning";
    } else if (hour < 18) {
        goodSomething = "Good Afternoon";
    } else {
        goodSomething = "Good Evening";
    }
    
    var timelyGreeting = `${goodSomething} ${userName}. The time is ${currentTime};`
    
} // end greetUser()


var globalString = "Hola!"

var globalNumber = 7600000000

function someFunction() {
    var localString = "Howdy!"
    
    var localNumber = 1000
} // end someFunction

function someFunction() {
    for(i = 0; i < 10; i++;)
        
    var age = 30;
    
    var greeting="";
    
    if (age < 21) {
        greeting = "Dont be a fool, stay in school."
    } else if (age < 40) {
        greeting = "Climb Higher."
    } else {
        greeting = "How about a vacation?"
    } // end if else
        
    var ageGreeting = "You are " + age + "." greeting
    
    document.getElementById("myH3").innerHTML = ageGreeting;
}

// Write the javscript for a simplified voting application. For this example, use pets(cats, dogs and bunnies) as the categories instead of film genres. Your application should be able to:
// - Tally the votes for each category as well as the total votes
// - Determince which type of pet recieved the most recent vote
// - Output the vote totals for each catefory as well as the totals to an h3 with an id of outputH3


// Global variables availablt to all functions

var totalVotes = 0;
var catVotes = 0;
var dogVotes = 0;
var bunnyVotes =0;

// an h3 for receieving the output from several functions

var divvy = document.getElementById("divvy");

var outputH3 = document.getElementById("outputH3");

function voteForPet(pet) {
    totalVotes++;
    if(pet == "cat") {
        catVotes++;
    } else if (pet == "dog") {
        dogVotes++;
    } else { // pet must be "bunny"
        bunnyVotes++;
    } // end if-else 
    var ouputH3.innerHTML = "So! You're a " + pet + "person <br/> Here are the Total Votes: <br/>Cats: " + catVotes + "<br/>Dogs: " + dogVotes + "<br/>Bunny: " + bunnyVotes;
} // end VoteForPet()

// Looks at incoming argument to decide which element called the function, and therefore, which part of an if-else statement will be run.

if (pet == "cat") {
    catVotes ++;
} else { // pet must be bunny
    bunnyVotes++;
} // end if-else

// Gets the values from 2 number input fields(ids of num1 and num2, adds them together and outpus the result to an HTML element with an id of outputH3. Remember you need the input strings to a numeric variable type to run calculations on them properly.)

function addNumbers() {
    var num1 = document.getElementById("num1").value;
    num1 = Number(num1); // turn string into number
    var num2 = document.getElementById("num2").value;
    num2 = Number(num2);
    
    var sum = num1 + num2
    
    document.getElementById("outputH3").innerHTML = num1 + " + " + num2 + "=" + sum;
} //end addNumbers()

//Generate a number between 20000 and 50000, and output it to look like a car price

var randomNumber = Math.floor(Math.random() * 20000 + 30000);
  outputH3.innerHTML = "Toyota: $" + randomNumber;

// Sets the CSS properties, such as width and a background color of any HTML element. Generate a random number between 10 and 100, and increase the width of a div by that much.

var randNum = Math.floor(Math.random() * 10 + 90);
divvy.style.width = randNum + "px";
divvy.style.backgroundColor = "azure";

// Runs a loop and outputs a counter vairable to an HTML element.

var = 0;

for (var i = 0; i < 10; i++)
    counter++;
outputElement.innerHTML = "" + counter;
    

// Runs a loop that iterates an array, concatenates a message using each array element, and outputs the result to an HTML element.

var msg = "";
var myElement = document.getElementById("outputElement");
for (var i = 0; ary.length; i++;)
    msg + = ary[i];
myElement.innerHTML = msg;

// Runs a loop that iterates an array, subjects each array element to the condition of an if-statement, and pushes (adds) those elements that pass the if-test to another array.

var newAry = [];
for (var i = 0; i < ary.length; i++)
    if(condition == true)
        newAry.push(ary[i]);
// Toggles output based on a boolean: every time the function runs the boolean is switched from true to false, back to true.

function toggleBool() {
    if(myFlag) 
        myFlag = false;
    else
        myFlag = true;
}