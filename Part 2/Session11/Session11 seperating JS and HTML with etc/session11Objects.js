/* 3 ways to instantaite an Array */

//1.)
 const flowers = []; // new empty array

/* The constructor method */
//2.)
const veggies = new Array(); // constructor method new empty array
//3.)
const plants = ["Cactus", "Corn"]; // new array with inital items

// Add two more items to the plants array using the methods push() and unshift()
plants.push("Bean"); // ["Cactus", "Corn", "Bean"]
plants.unshift("Tomato"); // ["Tomato","Cactus", "Corn", "Bean"]

// For flowers and veggies, assign values directly by index:
flowers[0] = "Rose"; // ["Rose"]
flowers[1] = "Tulip"; // ["Rose", "Tulip"]
veggies[0] = "Kale"; // ["Kale]
veggies[1] = "Broccoli"; // ["Kale", "Broccoli]

//document.write("flowers: "+ flowers + "<br>");
//document.write("plants: "+ plants + "<br>");
//document.write("veggies: "+ veggies + "<br>");

const car = new Object(); // the constructor method
// string properties
car.make = "Toyota";
car.model = "Corolla";
car.color = "silver";
// number properties
car.year = 2010;
car.miles = 45327;
car.price = 6888;
// boolean property
car.warranty = false;

car.listForSale = function () {
    return `For Sale! Beautiful and reliable ${this.color} ${this.year} ${this.make} ${this.model}. Only ${this.miles}miles. Asking ${this.price}.`;
}
//console.log(car.make); // "Toyota";

var sellIt = car.listForSale(); // invole the method

//console.log(sellIt); // For Sale! Beautiful and reliable car

const cat = {
    name: "Fluffy",
    age: 2,
    neutered: false,
    toys: ["Ball", "Yarn", "Sack o' catnip in the guise of a mouse"]
};
//console.log(cat.name); // Fluffy
//console.log(cat.toys[2]); // Sack o' catnip in the guise of a mouse

const genres = [
  { genre: "action", votes: 1 },
  { genre: "adventure", votes: 2 },
  { genre: "animation", votes: 3 },
];
//console.log(genres[2].genre); // animation
//console.log(genres[1].votes); // 2
//console.log(genres[0].genre); // action

const genreObjArr = [
   { genre: "Action", votes: 0, star: "Jackie Chan", movie: "Rush Hour" },
   { genre: "Adventure", votes: 0, star: "Harrison Ford", movie: "Indiana Jones" },
   { genre: "Animation", votes: 0, star: "Paddington Bear", movie: "Paddington Bear" },
];
console.log(genreObjArr[2].star); // Paddington Bear
console.log(genreObjArr[1].movie); // Indiana Jones
