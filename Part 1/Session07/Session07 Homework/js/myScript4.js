var rightNow = new Date(); // updated whenever page loads
console.log(rightNow);

var rightNow_ms = rightNow.getTime(); // ms from Jan 1, 1970
console.log("Milisec from Jan 1, 1970 til now: " + rightNow_ms);

var backThen = new Date("Thur Aug 31 17 09:18:00"); // the past
console.log(backThen);

var backThen_ms = backThen.getTime(); // some giant number
console.log(backThen_ms);

var  diff_ms = rightNow - backThen_ms; // time diff in ms
console.log(diff_ms);

var diff_sec = Math.round(diff_ms/1000); // convert ms diff to sec
console.log(diff_sec);

var diff_min = Math.floor(diff_sec/60); // convert sec diff to min
console.log(diff_min);

var diff_hr = Math.floor(diff_min/60); // convert min diff to hr
console.log(diff_hr);

var diff_day = Math.floor(diff_hr/24); // convert hr diff to days
console.log(diff_day);

var fuzzy_time = diff_day + " days " + diff_hr%24 + " hour ago";
console.log(fuzzy_time);

var fuzzy_time = "uknown";

//big if-else if-else block to express fuzzy time;
// if less than 1 min ago (60 sec)
if(diff_sec < 60) {
    
    fuzzy_time = `${diff_sec} seconds ago`;
    
} else if (diff_min < 10) { // if less than 10 min, show both min & sec
    
    fuzzy_time = `${diff_min} min ${diff_sec%60} sec ago`;
    
} else if (diff_min < 60) { // if less than 1 hr, show min only
    
    fuzzy_time = `${diff_min} min ago`;
    
} else if (diff_hr < 10) { // if less than 10 hrs, show both hrs & min
    
    fuzzy_time = `${diff_hr} hr ${diff_min%60} min ago`;
    
} else if (diff_hr < 24) { // of ;ess than 1 day. show hours only
    
    fuzzy_time = `${diff_hr} hr`;
    
} else if (diff_day < 7) { // if less than 7 days, show days and hrs
    
    fuzzy_time = `${diff_day} days ${diff_hr%24} hrs ago`;
    
} else { // if 7+ days, show only days
    
    fuzzy_time = `${diff_day} days`;
}
// `${diff_day} days ${diff_hr%24} hours ago`;

document.getElementById("demo").innerHTML = fuzzy_time;