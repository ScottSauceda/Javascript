var slidesObjArr = [ 

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

// grab the DOM elements
const bigPicDiv = document.getElementById("bigPicDiv");
const thumbnailsDiv = document.getElementById("thumbnailsDiv");
const footer = document.querySelector("footer");

// the Autoplay button
const autoplayBtn = document.getElementById("autoplayBtn");
autoplayBtn.addEventListener("click", toggleAutoplay);


// First Image Appears in bigPicDiv on Page Load, Automatically
// Instantiate an Image Object
const bigPic = new Image();
bigPic.src = "images/" + slidesObjArr[0].pic;
bigPicDiv.appendChild(bigPic); // put the pic in the div
footer.innerHTML = slidesObjArr[0].cap;

// loop to output the clickable thumbs
for(let i = 0; i < slidesObjArr.length; i++) {
    
    // make another dynamic thumb image object
    let thumb = new Image();
    thumb.src = "images/" + slidesObjArr[i].pic;
    thumb.id = i; // property to hold the index value
    thumb.addEventListener("click", swapPic); // make clickable
    thumbnailsDiv.appendChild(thumb); // output thumb to div
    
} // end for loop

function swapPic() {
    
    // "this" is the element that called the function (the thumb)
    // copy the src of the thumb over to the bigPic
    bigPic.src = this.src; // bigPic.src = event.target.src;
    // swap the caption too while you're at it
    footer.innerHTML = slidesObjArr[this.id].cap; // [event.target.id]
    
}

var myCounter = 0;
setInterval(toggleAutoplay, 3000);

// runs on button click. turn autoplay on and off
function toggleAutoplay() {
    
    // serve up first image automatically
    bigPic.src = "images/" + slidesObjArr[myCounter].pic;
    myCounter++;
    
}







