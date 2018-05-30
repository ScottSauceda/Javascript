var folder = "bunny";

var picArr = ["bunny01.jpg", "bunny02.jpg", "bunny03.jpg", "bunny04.jpg", "bunny05.jpg", "bunny06.jpg", "bunny07.jpg", "bunny08.jpg", "bunny09.jpg", "bunny10.jpg", "bunny11.jpg", "bunny12.jpg"]; // the slideshow image

// pass the DOM divs to JS obj
var bigPicDiv = document.getElementById("bigPicDiv");
var thumbsDiv = document.getElementById("thumbsDiv");
var footer = document.getElementById("footer");
var footerTxt = document.getElementById("footerTxt");

// instantiating an image object for bigPic
var bigPic = new Image();
// set the source of the dynamic image
bigPic.src = "images/bunny/bunny01.jpg";
// put the bigPic Image into the bigPicDiv
bigPicDiv.appendChild(bigPic);

// a for loop tp output the thumbs

for(let i = 0; i < picArr.length; i++) {
    // instantiating an image object for thumbPic
    var thumbPic = new Image();
    thumbPic.src = `images-slideshow/${folder}/${picArr[i]}`;
}