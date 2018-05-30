//FAVEFRUIT JS

var faveOutput = document.getElementById("faveOutput");
function faveFruit() {
    var faveFruit = document.getElementById("faveFruit").value;
    var msg = ` ${faveFruit}! What an excellent choice for your favorite fruit!`;
    var fruitPic = `<img src="images/${faveFruit}.png"/>`;
    faveOutput.innerHTML = fruitPic + msg;
}

//COLORPICKER JS

function changeColor() { // runs whenever a color is chosen
    // get the color value that the use just chose
    var colorValue = document.getElementById("colorPicker").value;
    // get the div box, so we can change its bg color
    var colorDiv = document.getElementById("colorDiv");
    // set the backgroundColor property of the div
    colorDiv.style.backgroundColor = colorValue;
    // output the hex color value
    document.getElementById("newColor").innerHTML = colorValue;
}

function setRandomColor() {
    var R = Math.floor(Math.random()*256);
    var G = Math.floor(Math.random()*256);
    var B = Math.floor(Math.random()*256);
    
    // concatenate RGB values to obtain a usable color
    var randomColor = 'rgb('+ R +', '+ G +', ' + B + ')';
//    var randomcolor = 'rgb(' + R +', '+G+', '+B +')';
    
    randomColor = Math.floor(Math.random()*16777216).toString(16);
    colorDiv.style.backgroundColor = "#" + randomColor;
}

