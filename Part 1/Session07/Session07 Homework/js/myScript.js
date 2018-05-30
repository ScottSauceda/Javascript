function processString() {
    // get the string that the user entered
    var myStr = document.getElementById("myStr").value;
    
    // get the Char At at the numeric position
    var myCharAt = document.getElementById("myCharAt").value;
    
    // get the indexOf number of the character
    var myIndexOf = document.getElementById("myIndexOf").value;
    
    // concatenate the output
    document.getElementById("strOut").innerHTML = `Original String: ${myStr} <br/> String Length: ${myStr.length} <br/> Character At Index ${myCharAt} is ${myStr.charAt(myCharAt)} <br/> First Occurance of ${myIndexOf}<br/> is at position ${myStr.indexOf(myIndexOf)} `;
    
} // end processString()


//var myStr = "Brooklyn";
//
//console.log(myStr[0]);
// B
//
//console.log(myStr[7]);
//n
//
//console.log(myStr.length);
//8
//
//console.log(myStr[myStr.length-1]);
//n
//
//console.log(myStr[myStr.length]);
//undefined
//
//console.log(myStr.charAt(4));
//k
//
//console.log(myStr.indexOf("k"));
//4
//
//console.log(myStr.indexOf("x"));
//-1