function convertTemp(t) {
    // parameter "t" has 2 possible values: arguments "FC" or "CF"
    // get the value entered for Temperature to Convert:
    var myTemp = document.getElementById("myTemp").value;
    myTemp = Number(myTemp); // convert myTemp to actual number
    // get h3 element that will hold the converted output
    var conversion = document.getElementById("conversion");
    var convertedTemp = 0; // a var for the converted Temperature
    var outputStr = ""; // a string for the entire output
    var from = t.charAt(0);
    var to = t.charAt(1);
    
    if(t == "FC") { // if Convert Fahr to Cels button was clicked
        convertedTemp = (myTemp - 32) * 5/9;//convert Fahr-to-Cels
        } 
        else if (t == "CF") { 
        convertedTemp = myTemp * 9/5 + 32; // convert Cels-to-Fahr
        }
        convertedTemp = convertedTemp.toFixed(2); // 2 deciamls
        //concatenate the full answer, &deg; is HTML Special Entity
        outputStr = `${myTemp}&deg; ${from} = ${convertedTemp}&deg; ${to}`;
        conversion.innerHTML = outputStr; // output result
} 