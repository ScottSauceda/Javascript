var autoplayCount = 0; // var to use for autoplay

var duration = 5; // so user can set AUTOPLAY slide duration



document.body.style.backgroundColor = "#123";
var app = document.getElementById("app"); // get the one and only div
// write the CSS as properties with cssText
app.style.cssText = "background-color: #555; width: 95%; height: 95vh; padding: 10px; margin: 10x auto";



var bigPicDiv = document.createElement("div"); // make big pic div
bigPicDiv.style.cssText = "width:75%; float:left; background-color: #888; height: 80vh; margin-bottom: 15px; overflow-y:scroll";
app.appendChild(bigPicDiv); // add big pic div to app div



var thumbsDiv = document.createElement("div"); // make thumbs div
thumbsDiv.style.cssText = "width: 24%; float: right; background-color: #aaa; height: 80vh; margin-bottom: 15px; overflow-y: scroll";
app.appendChild(thumbsDiv); // add thumbs div to app div



var footer = document.createElement("div"); // make a footer div
footer.style.cssText = "clear: both; height: 8vh";
app.appendChild(footer); // add footer div to app div



var footerTxt = document.createElement("h3"); // caption holder
footerTxt.style.cssText = "display:inline; float: left; color: beige; max-width: 70%; font-family: sans-serif; padding-left: 30px";
footer.appendChild(footerTxt); // put the h3 in the footer



var durationChooser = document.createElement("input"); // input sec
durationChooser.type = "number"; // don't allow non-numeric input
durationChooser.maxLength = "3"; // 3-digit num max: 999
durationChooser.style.cssText = "width: 90px; color: beige; background-color: forestgreen; max-width: 70%; font-family: sans-serif; float: right; font-size: 1.25rem; weight: bold; margin: 5px; padding: 5px";
durationChooser.value = duration; // divide ms to get sec
footer.appendChild(durationChooser);



var autoplayBtn = document.createElement("button"); // AUTOPLAY btn
autoplayBtn.innerHTML = "AUTOPLAY";
autoplayBtn.style.cssText = "padding: 5px 25px; margin: 5px; font-weight: bold; font-size: 1.25rem; background-color: #adb; color: #586; float: right; letter-spacing: 2px; cursor: pointer";
autoplayBtn.addEventListener("click", initAutoplay); // clickable
footer.appendChild(autoplayBtn); // add AUTOPLAY btn to footer

var stopBtn = document.createElement("button"); // make STOP btn
stopBtn.innerHTML = "STOP";
stopBtn.style.cssText = "padding: 5px 25px; margin: 5px; font-weight: bold; font-size: 1.25rem; background-color: #daa; color: #855; float: right; letter-spacing: 2px; cursor: pointer";
stopBtn.addEventListener("click", stopAutoplay); // clickable
footer.appendChild(stopBtn); // add STOP btn to footer



var myInterval;

function initAutoplay() {
    duration = durationChooser.value; // get value from input box
    if(duration !== ""){ // if durationChooser is NOT an empty string
       duration *= 1000; // convert duration from sec to milliseconds
       duration = Math.abs(duration); // convert neg to pos(if negnum)
    } else {  // it is an empty string- theuser wipedout the inputbox 
        duration = 5000; // restore default 5 sed
        durationChooser.value = duration;
    } // end if else
    myInterval = setInterval(swapPic, duration); // 2 params; func every x ms
    autoplayBtn.removeEventListener("click", initAutoplay); // disable btn
} // end initAutoplay()

function stopAutoplay () {
    clearInterval(myInterval); // stops the setInterval() autoplay
    autoplayBtn.addEventListener("click",initAutoplay); // restore clickable
} // end stopAutoplay

// the image data: folder and file names
var folder = "images";

var picArr = [
              "00-B-Cheat-Sheet-Tang.jpg", 
              "00-tang-sancai-drippy.jpg",
              "00-tang-sancai-drippy-camel.jpg",
              "00-tang-horse-rider-sancai.jpg",
              "01-Tang_sancai-footed-jar.jpg",
              "01-Westerner_on_a_camel.jpg",
              "00-C-Cheat-Sheet-Song.jpg",
              "00-song-qianbai-bowl-gold-rim.jpg",
              "00-song-qianbai-bowl-incised.jpg",
              "00-song-qianbai-scalloped-dish.jpg",
              ];




var slideArr = [
     { pic: "00-A-Cheat-Sheet-Han.jpg",  
      cap: "The Han Dynasty (206BC-220AD) saw the rise of ceramic arts in China. Green and brown glazes are typical, as are architectural models."
    },

    { pic: "00-han-green-vase.jpg", 
      cap: "Lead green vessel with faux ring handles held by a diamond-shaped taotie; good, bright glaze and nicely detailed applied designs to shoulder." 
    },

    { pic: "00-han-green-house.jpg", 
      cap: "The popularity of architectural models during the Han gives us great insight into the daily life of the people. Here, a man ascends a staircase-like ladder to reach the second floor of a dwelling--up above the dust and damp of street level" 
    },

    { pic: "00-han-green-tower.jpg", 
      cap: "A magnificent tower with padoda roofs and balconies soaring several stories--an ancient skyscraper! The popularity of architectural models during the Han gives us great insight into the daily life of the people." 
    },

    { pic: "00-han-unglazed-musician.jpg", 
      cap: "This graceful musician in flowing robes has been intent upon her zither for the past 2000 years. Tombs were furnished with models of homes, household effects, animals, servants and entertainers to furnish an important personage with everything they would require in the afterlife." 
    }
];



var bigPic = new Image(); // instantiate image obj for bigPic
bigPic.style.cssText = "width:100%; height: auto; margin-bottom: 10px";
bigPic.src = `${folder}/${slideArr[0].pic}`; // set array src on page load to be first array item
bigPicDiv.appendChild(bigPic); // put bigPic into bigPicDiv on page load 
footerTxt.innerHTML = slideArr[0].cap; // first caption for first pic on page load



for(var i = 0; i < slideArr.length; i++) { // a for loop to output the thumbs
    var thumbPic = new Image(); // image object for thumbPic
    thumbPic.style.cssText = "width:100%; height: auto; margin-bottom: 10px";
    thumbPic.src = `${folder}/${slideArr[i].pic}`
    thumbPic.id = i; // assign each thumb an id to assoc w array index
    thumbPic.addEventListener("click", swapPic); // thumb click calls swapPic
    thumbsDiv.appendChild(thumbPic); // add another thumb pic to thumbs div
} // end for loop



function swapPic() { // event = "click" event.target IS the thing clicked
    
    if(event) { // event exisits (its true) only if thumb click called func
        // runs when thumb pic is clicked
        footerTxt.innerHTML = `${slideArr[event.target.id].cap}`;
        bigPic.src = event.target.src; // event.target.src; change img src
        bigPicDiv = "";
        bigPicDiv.appendChild(bigPic); // replace img
      
      } else { // "event" doesnt exist (returns FALSE), so we are in AUTOPLAY
        bigPic.src = `${folder}/${slideArr[autoplayCount].pic}`;
        footerTxt.innerHTML = `${slideArr[autoplayCount].cap}`;
        // when autoplay calls func there was no "event"
    
      if(autoplayCount < slideArr.length-1) {
          autoplayCount++; // increment by 1 so that you get next pic next time
      } else  { // you are at the end of array, out of pics, so rest to 0
       autoplayCount = 
           0;   
       } // end inner if-else
      
    } // end outer ifelse
    
} // end swapPic()