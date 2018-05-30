//var x = 1;
//
//var y = 2;
//
//var z = 3;
//
//if (z == 5){ // this is true
//    alert("Condition 1 is TRUE");
//} else  if(z == x + y){
//    alert("Condition 2 is TrUE");
//} else {
//    // do as a last resort
//}// end if else


function validateForm() {
    var minRent = document.getElementById("minRent").value;
    var maxRent = document.getElementById("maxRent").value;
    
    if(minRent > maxRent) {
        alert("Minimum Rent Must Be Less Than Maximum Rent!");
        return false; // the data cannot leave the page
    } // end if
} // end function validateForm()