var sevens = [];

for(let i = 0; i <= 100; i++) {

// if i / 7 yields no remainder, i is divisble by 7
if (i % 7 == 0) { // if no remainder when dividing i by 7
    sevens.push(i);
}

var outputDiv = document.getElementById("demo");

outputDiv.innerHTML = sevens;
    
}