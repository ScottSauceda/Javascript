const dog = new Object();
// properties
dog.name = "Rover";
dog.color = "tan";
dog.age = 3;
//alert(dog.color);


const dogs = ["Dobernam", "Chihuhua", "Corgie", "Bulldog"];
//alert(dogs[dogs.length-1]); //Bulldog


const dogNames = new Array();
dogNames[0] = "Gruffy";
dogNames[1] = "Sir Barkalot";
//alert(dogNames);


const truck = new Object();
// properties
truck.year = 2003;
truck.forSale = true;
truck.color = "black";
truck.make = "Chevy";
truck.model = "Silverado";
truck.mileage = 62454;
truck.price = 6888;


truck.brag = function() {
    `My ${truck.year} ${truck.make} ${truck.model} is the best!`;
}

const bike = {
    make: "Harley",
    engine: "1000cc",
    topMPH: 150,
    boast: function() {
        return `Varoom! Listen to my ${this.make}'s ${this.engine} engine roar`;
    } 
}; // end const bike
//alert(bike.boast());

const myBike = bike;
myBike.color = "red"; // new property
myBike.extraChrome = true; // new property
alert(myBike);
alert(myBike.extraChrome); // true
alert(!myBike.extraChrome); // false (! negates boolean)