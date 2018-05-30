var questionAry = [
    {question: "When was the Declaration of Independence written?", pointValue: 2, correctAnswer: 1, option1:"1776", option2:"1876", option3:"2018", option4:"33"},
    {question:"When was the battle of Stamford Bridge?", pointValue: 2, correctAnswer: 1, option1:"1066", option2:"1000", option3:"1337", option4:"1050"},
    {question:"When did the US enter WW2?", pointValue: 2, correctAnswer: 1, option1:"1941", option2:"1946", option3:"1920", option4:"1969"}
];



//var xhr = new XMLHttpRequest();
//xhr.onreadystate . . .

function checkAnswer(){
    if(questionAry[this.questionIndx].correctAnswer == this.indx){
        console.log("Congrats!");
    }
    else{
        console.log("You got it wrong.");
    }
}

function init(){
    console.log("in init");
    for(let i = 0; i < questionAry.length; i++){
    /*5.) For each quiz question, use the following template to generate the dynamic HTML using javascript:
        <div id=“box#”> <!— Replace # with the number of the question—>
	    <h3></h3> <!— Replace the innerHTML with the question String —>
	    <ul> 
            <button></button> <!— Place the four options within these li’s innerHTML. Add an event listener to the grading function with the option number(1-4) and the question number —>
		    <button></button>
		    <button></button>
		    <button></button>
	    </ul>
        </div>*/
    let newDiv = document.createElement('div');
   
    let newH3 = document.createElement('h3');
    newH3.innerHTML = questionAry[i].question;
    newDiv.appendChild(newH3);
    let newUL = document.createElement('ul');
    newDiv.appendChild(newUL);
    let buttonAry = new Array();
    for(let j = 1; j < 5; j++){
        let newLI = document.createElement('li');
        let newButton = document.createElement('button');
        newButton.innerHTML = questionAry[i]["option"+j];
        newButton.indx = j;
        newButton.questionIndx = i;
        newButton.addEventListener('click', checkAnswer)
        
        newLI.appendChild(newButton);
        newUL.appendChild(newLI);
               
    }
    
 document.querySelector('#questionBox').appendChild(newDiv);
        }
}

init();








