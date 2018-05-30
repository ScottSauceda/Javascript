function calculate() {
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var sum = num1 + num2;
  
  var result = `${num1} + ${num2} = ${sum}`;
  
//  num1 + " + " + num2 + " = " + sum
  document.getElementById("box1").innerHTML = result;
}

function subtract() {
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var difference = num1 - num2;
  
  var result = `${num1} - ${num2} = ${difference}`;
  
//  num1 + " + " + num2 + " = " + sum
  document.getElementById("box1").innerHTML = result;
}


//Add +        3+1=4
//
//Subtract -   3-2 = 1


//
//Multiply *   5*8 = 40
//
//Divide   /   40/8 = 5
//
//Modulus  %   40 % 7 = 5 (40, 33, 26, 19, 12, 5)
//
function exponent() {
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var difference = num1 ** num2;
  
  var result = `${num1}^ ${num2} = ${difference}`;
  
//  num1 + " + " + num2 + " = " + sum
  document.getElementById("box1").innerHTML = result;
}


function division() {
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var quotient = num1 / num2;
  
  var result = `${num1} / ${num2} = ${quotient}`;
  
//  num1 + " + " + num2 + " = " + sum
  document.getElementById("box1").innerHTML = result;
}

function multiply() {
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var product = num1 * num2;
  
  var result = `${num1} * ${num2} = ${product}`;
  
//  num1 + " + " + num2 + " = " + sum
  document.getElementById("box1").innerHTML = result;
}

function modulus() {
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var remainder = num1 % num2;
  
  var result = `${num1} % ${num2} = ${remainder}`;
  
//  num1 + " + " + num2 + " = " + sum
  document.getElementById("box1").innerHTML = result;
}

function btn1() {
    var currentNum = document.getElementById("num1").value;
    currentNum = currentNum + "1";
    document.getElementById("num1").value = currentNum;
}

function btn2() {
    var currentNum = document.getElementById("num2").value;
    currentNum = currentNum + "2";
    document.getElementById("num2").value = currentNum;
}

function btn3() {
    var currentNum = document.getElementById("num3").value;
    currentNum = currentNum + "3";
    document.getElementById("num3").value = currentNum;
}

function btn4() {
    var currentNum = document.getElementById("num4").value;
    currentNum = currentNum + "4";
    document.getElementById("num1").value = currentNum;
}
















