var carsArr = ["Toyota", "Lexus", "Nissan", "Kia", "Honda", "Jeep"]

var inventory = "";


for(let i = 0; i < carsArr.length; i++) {
    
    var randNum = Math.floor(Math.random() * 55000) + 20000;
    
    var salesTax = (randNum * 0.08);
    
    var grandTot = Math.floor(randNum + salesTax);
    
    var outputDiv = document.getElementById("demo");
    
    inventory += `* ${carsArr[i]} $${randNum} MSRP + $${salesTax.toFixed(2)} sales tax <br/> $${grandTot} Grand Total\n\n <br/>`;
    
    outputDiv.innerHTML = inventory;
    
    
    } // end for

