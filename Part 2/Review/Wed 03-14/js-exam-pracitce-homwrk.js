//                      VARIABLES:
//   var
//   const
//   let

var cake = "chocalate";

const dragons = ["komdo", "evil", "ancient"];

let  password = 123;



//                          TYPES:

// string

var pizza = "pepperoni";

// number

var zipCode = 12345;

// array

let drinks = ["coke", "sprite", "root beer" ];

// object

let myH3 = document.getElementById("myH3");

// boolean

const isQuizMode = true;



//                          METHODS & PROPERTIES:

// Number:
// toFixed -- 2.toFixed(3) = "2.000";
var num1 = 2;
num1.toFixed(2) = "2.000";

//Math:
//floor -- Math.floor(2.8) = 2;
var ranDum = Math.floor(2.8);
console.log(ranDum); // 2

//ceil -- Math.ceil(2.2) = 3;
var numRand = Math.ceil(2.2);
console.log(numRand); // 3

//round -- Math.round(2.2) = 2;
var rounder1 = Math.round(2.2);
console.log(rounder1); // 2
//Math.round(2.5) = 3;
var rounder2 = Math.round(2.5);
console.log(rounder2); // 3

//random -- min + Math.floor(Math.random() * (max - min));

var price = 100 + Math.floor(Math.random() * (1000 - 100));
console.log(price); // rand num 100 - 1000



//                          ARRAY:
// pop: removes at the end
var myArr = ["red", "blue", "yellow"];
myArr.pop(); // remove yellow from the end
console.log(myArr); // myArr = ["red", "blue"];

// push: adds at the end
var myArr2 = ["red", "blue"];
myArr.push("yellow"); // add yellow to the end
console.log(myArr2); // myArr = ["red", "blue", "yellow"];

//shift: removes at the beggining
var myArr3 = [1, 2, 3];
myArr3.shift(); // remove 1 from the beggining
console.log(myArr3); // [2,3]

//unshift: adds at the beginning
var myArr4 = [2,3];
myArr4.unshift("one"); // add "one" to the beggining
console.log(myArr4); // ["one", 2, 3]

//sort: sorts array alphabetically
var fishCol = ["red fish", "blue fish"];
fishCol.sort(); // sort aplabetically["blue fish" ,"red fish"]
console.log(fishCol); ["blue fish" ,"red fish"]
//sorts array numerically
var randNum = [3, 2, 1];
randNum.sort(); // sort numerically[1, 2, 3]
console.log(randNum); // [1, 2, 3]

//concat: combine two arrays together
const comboArr = myArr2.concat([myArr4]);
console.log(comboArr); // ["red","blue","yellow", Array(3)];

const comboArr2 = randNum.concat(["donuts", "chips"]);
console.log(comboArr2);// [1,2,3,"donuts","chips"];

//slice(initialIndex, lastIndex);
let arr = [1,2,3,4,5,6,7,8,9,10]
let arr2 = arr.slice(4, 7); // [5,6,7];
console.log(arr2); // [5,6,7]
console.log(arr); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//splice(initialIndex, count);
let myArr = [1,2,3,4,5,6,7,8,9,10];
let myArr2 = arr.splice(4,3); // [5,6,7]
console.log(myArr2); // [5,6,7]
console.log(myArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//join: turns array into single string
var arr3 = ["apple", "banana", "cherry", "dragon fruit"];
var arr4 = arr3.join(); //["apple, banana, cherry, dragon fruit"]
console.log(arr4); // "apple, banana, cherry, dragon fruit"

//indexOf: 
var myArr3 = ["taco", "burrito", "enchilada"]
var myArr4 = myArr3.indexOf("burrito");
console.log(myArr3); // ["taco", "burrito", "enchilada"]
console.log(myArr4); // 1

// lastIndexOf:
var arr5 = ["food", "water", "desert", "water"];
var arr6 = arr5.lastIndexOf("water");
console.log(arr5); //["food", "water", "desert", "water"]
console.log(arr6); // 3

// reverse:
var myArr5 = ["Alpha", "Bravo", "Charlie", "Delta"];
var myArr6 = myArr5.reverse();
console.log(myArr5); // ["Delta", "Charlie", "Bravo", "Alpha"]
console.log(myArr6); // ["Delta", "Charlie", "Bravo", "Alpha"]

// includes: true if item is found, false otherwise
var arr7 = ["red", "blue", "green", "white"];
var arr8 = arr7.includes("green");
var arr9 = arr7.includes("orange");
console.log(arr7); // ["red", "blue", "green", "white"]
console.log(arr8); // true
console.log(arr9); // false

var arr10 = [1,2,3,4,5];
var arr11 = arr10.includes(3);
var arr12 = arr10.includes(7);
console.log(arr10); //[1,2,3,4,5]
console.log(arr11); // true
console.log(arr10); // false

var myArr7 = ["Japan", "Singapore", "Korea", "Thailand"];
var myArr8 = myArr7.length;
console.log(myArr7); //["Japan", "Singapore", "Korea", "Thailand"]
console.log(myArr8); // 4



//                      STRINGS

//charAT: gets character at specified index
"hello".charAt(2) // "l"
"Hello"[2] // "l"

// charCodeAt: gets ASCII code of character
"hello".charCodeAt(2) // 108

//slice
var str = "Hello World!";
var res = str.slice(1,5);
console.log(str); // "Hello World!"
console.log(res); // "ello"

// split: convert to array
var str1 = "How are you doing today?";
var res1 = str1.split(" ");
console.log(str1); // How are you doing today?
console.log(res1); // ["How", "are", "you", "doing", "today?"]

// indexOf
var str2 = "Hello world, welcome to the universe.";
var res2 = str2.indexOf("welcome");
console.log(str2); // Hello world, welcome to the universe.
console.log(res2); // 13

// lastIndexOf
var str3 = "Hello planet earth, you are a great planet.";
var res3 = str3.lastIndexOf("planet");
console.log(str3); // Hello planet earth, you are a great planet.
console.log(res3); //36

// toLowerCase
var str4 = "Hello World!";
var res4 = str4.toLowerCase();
console.log(str4); // "Hello World!"
console.log(res4); // "hello world!"

// to UpperCase
var str5 = "hello world!";
var res5 = str5.toUpperCase();
console.log(str5); // "hello world!"
console.log(res5); // "HELLO WORLD!"

// endsWith
var str6 = "Hello world, welcome to the universe.";
var res6 = str6.endsWith("universe.");
console.log(str6); //Hello world, welcome to the universe.
console.log(res6); // true

//startsWith
var str7 = "Hello world, welcome to the universe.";
var res7 = str7.startsWith("Hello");
console.log(str7); //Hello world, welcome to the universe.
console.log(res7); // true

//trim: removes whitespace from edges
var str8 = "  Hello world, welcome to the universe.  ";
var res8 = str8.trim();
console.log(str8); //  Hello world, welcome to the universe.  
console.log(res8); //Hello world, welcome to the universe.

//includes: true if string is found, false otherwise.
var str9 = "Hello world, welcome to the universe.";
var res9 = str9.includes("world");
console.log(str9); // Hello world, welcome to the universe.
console.log(res9); // true

//length
var str10 = "Howdy World!";
var res10 = str10.length;
console.log(str10); //Howdy World!
console.log(res10); //12



//                          DOCUMENT          

// getElementById("demo")

var myH3 = document.getElementById("myH3");

// querySelector('css selector'): get first element that matches the selector.
<h2 class="example">A heading with class="example"</h2>
<p class="example">A paragraph with class="example".</p> 

document.querySelector(".example").style.backgroundColor = "red";

// the h2 turns red
<h2 class="example">A heading with class="example"</h2>
// the paragraph does not turn red
<p class="example">A paragraph with class="example".</p>

// querySelectorAll('css selector'): get list of all       elements that match the selector.

// ??????????????????????????????????????????????

// createElement('tag name')

// addEventListener('event name', function)
 document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});

//                  HTML ELEMENT:

// id
// ???? find this later

// src
// ??? find this later

// innerHTML // writes string to html element selected
document.getElementById("outputDiv").innerHTML;

// value // grabs the value from an input html element
document.getElementById("firstName").value;

// addEventListener('event name', function)
// ?? find this later

//  appendChild(element)
// ?? find this later

// className
// ?? find this later

// style
h1.style.backgroundColor = "blue";

//                  DOM EVENTS
// element.addEventListener('event name', function)
// ? I half know this, but what context?


//                  event names:

// click
??.addEventListener("click", someFunction);

// change or on change ??
??.addEventListener("change", someFunction);

// mouseover
??.addEventListener("mouseover", someFunction);

// mouseout
??.addEventListener("mouseout", someFunction);

// submit
??.addEventListener("submit" someFunction);

//                     EVENT OBJECT:
// event.target: element which triggered the event. Can also be referered as "this".

// event.type: name of the event

//                     WINDOW
//setTimeout(function, delay): run function once after delay.
//?? I dont fully understand how this works

//setInterval(function, delay): run function once every delay.
//?? I dont fully understand how this works

//clearTimeout(timeout)
//??

//clearInterval(interval)
//??

//                     OPERATORS:
//Math: +, -, /, *, **, %

//Strings: +

//Assignment: =

//Comparison: > < >= <= == === != !==

//Not: !

//                      KEYWORDS:
//  if / else:

//   if (condition) {
//         code
//      }
//    else if (condition) {
//          code
//      }
//     else {
//          code
//       }


//   for:
//    for (let i = 0; i < array.length; i++) {
//                // access each element by using array[i]
//            }

//                      FUNCTIONS:
// Syntax: function name(parameters) {
//            code
//            return value;
//        }


//                  SIMPLE OBJECTS:
//        obj = {
//            propertyName: propertyValue,
//            methodName: function() {
//                code
//                // use this to refer to the current object
//            }
//        };

//                    OBJECT ARRAY:
//        objArr = [
//            { prop: val, prop1: val1 },
//            { prop: val, prop1: val1 },
//            { prop: val, prop1: val1 }
//        ];

   const objectArray = [
       {name: "goat", numLegs: 4, environment: "Hills", collective: "Herd", juvenile: "Kid", type:"Animal"},
       {name: "crow", numLegs: 2, environment: "Sky", collective: "Murder", juvenile: "Chick", type:"Animal"},
       {name: "whale", numLegs: 0, environment: "Ocean", collective: "Pod", juvenile: "Calf", type:"Animal"},
       {make: "Chevy", model: "Cavalier", color: "White", year: 2000, type: "Vehicle"},
       {stories: 14, name: "Digital Film Academy", location: "9th Ave", type: "Building"}
   ];

/* Initializer - For counter/index
Condition - When does the loop stop
Modify the initializer */