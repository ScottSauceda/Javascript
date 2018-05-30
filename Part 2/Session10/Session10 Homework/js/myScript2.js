const fruits = ["Apricot", "Blackberry", "Blueberry", "Cherry", "Grape", "Pineapple", "Raspberry", "Strawberry"];

const jam = [];

const jelly = [];

function makeJamOrJelly() {
    
for(let i = 0; i < fruits.length; i++) { // the "fruit loop"
    var last5Chars = fruits[i].slice(-5); // last 5 chars of fruit
    if (last5Chars == "berry") { // if fruit ends in "berry"
    jam.push(fruits[i] + " Jam"); // make jam
    } else { // it's not a berry
      jelly.push(fruits[i] + " Jelly"); // make jelly
    } // end if else
    
  } // end for
    
} // end makeJamOrJelly()

makeJamOrJelly();

alert("Jam: " + jam);

alert("Jelly: " + jelly);