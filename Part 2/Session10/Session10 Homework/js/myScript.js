const froob = "Froot Bat"; // froob shall forever be "Froot Bat"

//alert(froob.indexOf("F")); // the 1st char is at index 0

//alert(froob.indexOf("t"))// the first "t" occurs at index 4

//alert(froob.indexOf(" "))// the space is at index 5

//alert(froob.indexOf("B"))// the "B" occurs at index 6



var fruit = "banana"; // fruit can be changed at will

var lastA = fruit.lastIndexOf("a");

// alert(lastA); // 5

var lastQ = fruit.lastIndexOf("q");

// alert(lastQ); // -1



var berry = "strawberry";

var isW = berry.includes("w");

//alert(isW);  // true

var isQ = berry.includes("q");

//alert(isQ); // false



var borough = "Brooklyn"; // a string to slice

// start at index 1 (2nd char), slice up to and including 5th char

var mySlice = borough.slice(1,5 ); // start at "r" continue to "k"

//alert(mySlice);

borough = "Manhattan"; // a string to slice

// start at index 3 (4th char), slice up to and including 6th char

mySlice = borough.slice(3, 6); // start at "h" continue to "t"

//alert(mySlice);



borough = "Staten Island"; // a string to slice

//mySlice = borough.slice(7);

//alert(mySlice); // Island

mySlice = borough.slice(-12);

//alert(mySlice);



var say = "I wonder if my voice will " + "echo ".repeat(1);

// alert(say); // I wonder if my voice will echo echo echo echo



var greeting = "Good Morning John. The time is now 14:20";

var greetingArr = greeting.split(" ");

// alert(greetingArr);

// alert(greetingArr[1]);



var groceries = "eggs, bread, milk, juice, coffee, butter";

var groceriesArr = groceries.split(", ");

// alert(groceries); // ["eggs", "bread", "milk", "juice", etc]

// alert(groceriesArr[groceriesArr.length-1]); // "butter"



//groceriesArr = groceriesArr.sort();

//alert(groceriesArr);



//groceriesArr = groceriesArr.reverse();

//alert(groceriesArr);



//groceriesArr = groceriesArr.pop();

//alert(groceriesArr);



//groceriesArr = groceriesArr.shift();

// alert(groceriesArr);



groceriesArr = groceriesArr.splice(1, 2); // ["juice", "butter"] removed items 2 & 3

// alert(groceriesArr);



groceriesArr.push("eggs"); // ["juice", "butter", "eggs"]

groceriesArr.push("coffee"); // ["juice", "butter", "eggs", "coffee"]

// alert(groceriesArr);



groceriesArr.unshift("beef"); // ["beef","juice","butter","eggs","coffee"]

//alert(groceriesArr);

groceriesArr[2] = "cheese"; // ["beef","juice","cheese","eggs","coffee"]

//alert(groceriesArr);



// groceriesArr.splice(3,4, beer); // replace items 3 and 4 w beer
// ["beef", "juice", "cheese", "eggs", "coffee"]
// ["beef", "juice", "cheese", "beer"]

// alert(groceriesArr);



const comboArr = groceriesArr.concat(['donuts', 'chips', 'bacon']);

//console.log(comboArr); // ["beer", "juice", "choose", "beer", + "donutes", "chips", "bacon" ]

var groceriesStr = comboArr.join();

// alert(groceriesStr);


/* */


const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];

const allSquares = [];


//for(let i = 0; i < primes.length; i++) {
//
//let squared = primes[i] * primes[i]; // square the number
//
//allSquares.push(squared);
//    
//}
//
//alert(allSquares);
// [4, 9, 25, 49, 121,169, 289, 361, 529, 841, 961, 1369, 1681, 1849]



for(let i = 0; i < primes.length; i++) {
    squareIt(primes[i]);
} // end for

function squareIt(p) {
    let squared = p * p;
    allSquares.push(squared);
}

//alert(allSquares);

const someSquares = [];

for(let i = 0; i < primes.length; i++) {
    // if 3 or if remainder divided by 10 equals 3
    let primo = primes[i];
    if(primo == 3 || primo % 10 == 3) {
       let squared = primo * primo;
       someSquares.push(squared);
    } // end if else
        
} // end for

alert(someSquares); // [9,169,529, 1849];