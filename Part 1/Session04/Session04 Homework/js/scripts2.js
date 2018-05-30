// IF ELSE JS

var x = 1;
var y = 2;
var z = 3;

if(z == 3) { // this is true
//    alert("Condition is TRUE");
} else if (z == 4){
//    alert("Condition is FALSE");
} else {
    // do as a last resort
}


// FORM VALIDATION JS

function validateForm() {
    var minRent = document.getElementById("minRent").value;
    var maxRent = document.getElementById("maxRent").value;
    if(minRent > maxRent) {
        alert("Minimum Rent Must Be Less Than Maximum Rent!");
        return false; // the data cannot leave the page
    } // end if
} // end function validateForm()

// Date Object JS

var dateTime = new Date();
var hour = dateTime.getHours();
var minutes = dateTime.getMinutes();
var timeIs = "The current time is: " + hour + ":" + minutes + ".";

//console.log(dateTime.getDate());
//console.log(dateTime.getMonth());
//console.log(dateTime.getFullYear());
//console.log(dateTime.getHours());
//console.log(dateTime.getMinutes());
//console.log(dateTime.getSeconds());
//// number of milliseconds since January 1, 1970, 00:00:00 UTC
//console.log(dateTime.getTime());
//console.log(dateTime.getTimezoneOffset());
//
//
//var firstName = "Brian";
//if(hour < 12) {
//    var greeting = "Good morning " + firstName + "!";
//} 
//alert(greeting);

// Instantiate a Date() Object
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    // function outputs a "Timely" Personalized Greeting
    function timelyGreeting() {
        var firstName = document.getElementById("firstName").value;
        var greeting = " "; // hold full greeting
        if (hour < 12) {
            greeting = "Good Morning";
        } else if (hour < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        } // close if-else
    // now that we have the "timely greeting", personaloze it:
        
      // set suffix to AM or PM
      var suffix = "";
      // convert from military time
      if (hour > 12) {
          suffix = "PM";
          hour -= 12; // shave 12 hrs, so that 1600 hrs becomes 4pm
      } else { // hours are less than 12, so it is morning
          suffix ="AM";
      }
      // add a leading zero to minutes if less than 1o minutes
      if(minute < 10) { // if 0-9 minutes
          minute = "0" + minutes
          alert(minute);
      }
        // output greeting: Good Morning John! The time is now 11:33AM
        greeting = `${greeting}, Brian! The time is now
                    ${hour}:${minute}${suffix}`;
      // output greeting: 
        document.getElementById("boxy").innerHTML = greeting;
        } // end timelyGreeting()