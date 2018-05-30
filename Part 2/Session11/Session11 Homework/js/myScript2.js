function greetUser() {
    var outputH3 = document.getElementById("output");
    var firstName = document.getElementById("firstName");
    var greeting = "Hello John";
    outputH3.innerHTML = greeting;
    return greeting; // the function produces an "answer"
}
//console.log(greeting); // undefined (local variable)
//console.log(greetUser); // Hello John


// ????????????????????????????????

function countToTen() {
    for(let i = 0; i < 10; i++) { // loop counts to 10
        if(i >= 7) {
            return i; // the loop never makes it to 10 function ends!        
        } // end if
        
    } // end for loop
        
}  // end countToTen()

var myReturnValue = countToTen();
// alert(myReturnValue);

function findTwoDigitNumber() {
    var nums = [1020, 325, 7, 19, 122, 15, 17, 2233];
    var loops = "Values checked: "; // how many times will loop run?
    for(var i = 0; i < nums.length; i++) {
        loops += nums[i] + " "; // record the running of the loop
        if(nums[i] > 9 && nums[i] < 100) { // if 2 digit number
            return loops; // loop ends when it finds 19
        } // end if
         
    } // end for
    
} // end findTwoDigitNumber

var myReturn = findTwoDigitNumber();
// alert(myReturn); // Values checked: 1020 325 7 19


// Three ways to instantiate an array

const flowers = []; // new empty array

const veggies = new Array(); // constructor method new empty array

const plants = ["Cactus", "Corn" ]; // new array with inital items

plants.push("Bean"); // ["Cactus", "Corn", "Bean"];
plants.unshift("Tomato"); // ["Tomato", "Cactus", "Corn", "Bean"];

//alert(plants);

flowers[0] = "Rose"; // ["Rose"]
flowers[1] = "Tulip"; // ["Rose", "Tulip"]

veggies[0] = "Kale"; // ["Kale"]
veggies[1] = "Broccoli"; // ["Kale", "Broccoli"]

const car = new Object(); // the constructor method

// string properties

car.make = "Toyota";

car.model = "Corolla";

car.color = "silver";

// number properties

car.year = 2019;

car.miles = 45327;

car.price = 6888;

// boolean property

car.warranty = false;

car. listForSale = function () {
    return `For Sale! Beautiful and reliable ${this.color} ${this.year} ${this.make} ${this.model}. Only ${this.miles} miles. Asking ${this.price}`;
}

console.log(car.make); // "Toyota";

var sellIt = car.listForSale(); // invoke the method

console.log(sellIt); // For Sale! Beautiful and reliable car



const cat = {
    name: "Fluffy",
    age: 2,
    neutered: false,
    toys: ["Ball", "Yarn", "Sack o' catnip in the guise of a mouse"]
};
// alert(cat.name) ;// Fluffy
// alert(cat.toys[2]) ;//Sack o' catnip in the guise of a mouse 



const genres = [
  {genre: "action", votes: 0},
  {genre: "adventure", votes: 0},
  {genre: "animation", votes: 0}
];
//alert(genres[2].genre); // animation

const genresObjArr = [
  {genre: "Action", votes:0, star: "Jackie Chan", movie: "Rush Hour"},
  {genre: "Adventure", votes:0, star: "Harrison Ford", movie: "Indiana Jones"},
  {genre: "Animation", votes:0, star: "Paddington Bear", movie: "Paddington Bear"},
];

alert(genresObjArr[2].star); // Paddington Bear
alert(genresObjArr[1].movie); // Indiana Jones