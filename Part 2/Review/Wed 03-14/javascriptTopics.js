/*
Javascript Topics:
    
    Script tags and using external(stored elsewhere) javascript
    
    Variables:
        Declarations:
            var
            const
            let
        Types:
            string
            number
            array
            object
            boolean
            
    Methods and Properties:
        Number:
            toFixed -- 2.toFixed(3) = '2.000';
        Math:
            floor -- Math.floor(2.8) = 2;
            ceil -- Math.ceil(2.2) = 3;
            round -- Math.round(2.2) = 2; Math.round(2.5) = 3;
            random -- min + Math.floor(Math.random() * (max - min));
        Array:
            pop: removes at the end
            push: adds at the end
            shift: removes at the beginning
            unshift: adds at the beginning
            sort
            concat
            slice(initialIndex, lastIndex):
                let arr = [1,2,3,4,5,6,7,8,9,10]
                arr.slice(4, 7);
                arr == [5,6,7]            
            splice(initialIndex, count):
                let arr = [1,2,3,4,5,6,7,8,9,10]
                arr.splice(4, 3);
                arr == [1,2,3,4,8,9,10]
            join
            indexOf
            lastIndexOf
            reverse
            includes: true if item is found, false otherwise.
            length
        String:
            chartAt: gets character at specfified index
                'Hello'.chartAt(2) == 'l';
                'Hello'[2] == 'l';
            charCodeAt: gets ASCII code of character
            slice
            split: convert to array
            indexOf
            lastIndexOf
            toLowerCase
            toUpperCase
            endsWith
            startsWith
            trim: removes whitespace from edges
            includes: true if string is found, false otherwise.
            length
        document:
            getElementById('id')
            querySelector('css selector'): get first element        that matches the selector.
            querySelectorAll('css selector'): get list of all       elements that match the selector.
            createElement('tag name')
            addEventListener('event name', function)
        html element:
            id
            src
            innerHTML
            value
            addEventListener('event name', function)
            appendChild(element)
            className
            style
    dom events:
        element.addEventListener('event name', function)
        event names:
            click
            change
            mouseover
            mouseout
            submit
        event object:
            event.target: element which triggered the event. Can also be referred as this.
            event.type: name of the event.
    window:
        setTimeout(function, delay): run function once after delay.
        setInterval(function, delay): run function once every delay.
        clearTimeout(timeout)
        clearInterval(interval)

    Operators:
        Math: +, -, /, *, **, %
        Strings: +
        Assignment: =
        Comparison: > < >= <= == === != !==
        Not: !
        
    Keywords:
        if / else:
            if (condition) {
                code
            }
            else if (condition) {
                code
            }
            else {
                code
            }
        for:
            for (let i = 0; i < array.length; i++) {
                // access each element by using array[i]
            }
        
    Functions:
        Syntax: function name(parameters) {
            code
            return value;
        }

    Simple Objects:
        obj = {
            propertyName: propertyValue,
            methodName: function() {
                code
                // use this to refer to the current object
            }
        };
        
    Object Array:
        objArr = [
            { prop: val, prop1: val1 },
            { prop: val, prop1: val1 },
            { prop: val, prop1: val1 }
        ];
*/
/*
Initializer - For counter/index
Condition - When does the loop stop
Modify the initializer
*/
   const object1 = new Object(); 
   const object2 = {};
   const object3 = {name:"Jeff", yobirth: "1992"};
   
   const arrayOne = [0, 1, 3, 2, 4, 6, 5];
   arrayOne[4];
   var arrayTwo = new Array();

   const objectArray = [
       {name: "goat", numLegs: 4, environment: "Hills", collective: "Herd", juvenile: "Kid", type:"Animal"},
       {name: "crow", numLegs: 2, environment: "Sky", collective: "Murder", juvenile: "Chick", type:"Animal"},
       {name: "whale", numLegs: 0, environment: "Ocean", collective: "Pod", juvenile: "Calf", type:"Animal"},
       {make: "Chevy", model: "Cavalier", color: "White", year: 2000, type: "Vehicle"},
       {stories: 14, name: "Digital Film Academy", location: "9th Ave", type: "Building"}
   ];

for(let i = 0; i < objectArray.length; i++){
    if(objectArray[i].type == "Animal"){
        console.log(`The object at index ${i} is an Animal`);
    }
    else if(objectArray[i].type == "Vehicle"){
        console.log(`The object at index ${i} is a Vehicle`);
    }
    else{
        console.log(`The object at index ${i} is not handled.`);
    }
}

    const elementArray = [
        /*Key: value pairs*/
        {tagName: "div", id: "divOne", className: "boxy"},
        {tagName: "div", id: "divTwo", className: "boxy"},
        {tagName: "div", id: "divThree", className: "boxy"},
        {tagName: "div", id: "divFour", className: "boxy"},
        {tagName: "div", id: "divFive", className: "boxy2"}
  
    ];

for(let i = 0; i < elementArray.length; i++){
    /*Creating dynamic objects*/
    //let newElement = document.createElement('div');
    let newElement = document.createElement(elementArray[i].tagName);
    
    newElement.id = elementArray[i].id;
    newElement.className = elementArray[i].className;
    
    newElement.addEventListener('click', ourFunction);
    
    document.body.appendChild(newElement);
    
    
}

function ourFunction(){
    /*Query selector*/
    let currentElement = document.querySelector("#" + event.target.id); 
    //let currentElement = document.getElementById(event.target.id); //Functionally equivalent to the previous line
    
    /*querySelector('.' + event.target.className + ":first-child")
        .boxy:first-child{
            
        }
    */

    console.log(currentElement.id);
    
}

/*Functions:
3 parts to create
keyword function
function name
parameters - The name of the parameter is set by the parameter list; not the name of the parameter when it is passed

IE:
we call a function with the line ourString = functionTwo(variableName);

But the function declaration might be:
function functionTwo(parameterName){}

Within the function, parameterName will be the name we reference the data with.


*/

function functionTwo(){
    /*Functions end on 1 of 3 conditions:
        You hit the end of the array
        You hit a return statement
        Or your code has an error that stops the program
    */
    return "This is the string that is being returned.";
}
var stringExample = "This is a test String.";
stringExample = functionTwo(); // Now stringExample holds the result of the functionTwo() return.


var genres = [
    {genre: "action", votes:0},
    {genre: "adventure", votes:0},
    {genre: "animation", votes:0},
    {genre: "biography", votes:0},
    {genre: "comedy", votes:0}   
];

// Iterate through the genres array until you reach the end of the array
for(let i = 0; i < genres.length; i++){
    let genreDiv = document.createElement('div');// Create the element to be put onto the page
    
    genreDiv.id = genres[i].genre;// At this point our HTML object would read as <div id="genreName"></div>
    genreDiv.indx = i; // The previous line would still be put on the page, but our HTMLObject when grabbed in javascript would also have a .indx property.
    genreDiv.className = "genre-btn"; //<div id="genreName" class="genre-btn"></div> would be on the page if we appended it at this point
    genreDiv.style.gridArea = genres[i].genre; //<div id="genreName" class="genre-btn" style="grid-area: genreName"></div>
   // genreDiv.style.backgroundImage = `url("images/btns/btn-${genres[i]}-1.png")`;
    
    //!IMPORTANT Commented out because we don't have the images here
    //<div id="genreName" class="genre-btn" style="grid-area: genreName; background-image: `url("images/btns/btn-genreName-1.png")`"></div>
    
    //No parameters on functions as arguments. We want them to be stored to be called later, not called when we run this line.
    genreDiv.addEventListener('click', logVote);
    genreDiv.addEventListener('mouseover', swapImage);
    genreDiv.addEventListener('mouseout', restoreImage);
    
    /*Final product at this point:
        <div id="genreName" className="genre-btn"
            style="grid-area: genreName; background-image:  `url("images/btns/btn-genreName-1.png")`"
            
            These 3 are the equivalent of our Eventlisteners but will not be on the page.
             onclick="logVote()" onmouseover="swapImage()"
             onmouseout="restoreImage()"></div>
    
    */
    document.body.appendChild(genreDiv);//Use the container
}

/*
    comedy div:
    <div id="comedy" class="genre-btn" style="grid-area: comedy / comedy / comedy / comedy;"></div>

*/
//Empty Function declarations to quell errors on event listeners
function logVote(){}
function swapImage(){}
function restoreImage(){}