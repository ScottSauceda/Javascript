function sayHello() {
            alert("Hello World");  // pop up
        }
        
        //sayHello(); // call the function
        
      function greetUser() {
          var firstName = document.getElementById("firstName").value
          var lastName = document.getElementById("lastName").value;
          var faveFruit = "Mangoes";
          var message = firstName + " likes " + faveFruit;
          console.log(message);

          var msg = "<h1 style = \"color:#fff\">Hello " + firstName + " " + lastName + " from JS!</h1>";
          
          // forward slash before a quotation allows you to use all double quotes througout the string, instead of having to switch to single quotes

          document.getElementById("box1").innerHTML = msg; // output msg
          
          
        }

function calculate() {
    var num1 = document.getElementById("num1").value;
    num1 = Number(num1);
    var num2 = document.getElementById("num2").value;
    num2 = Number(num2);
    
    var sum = num1 + num2;
    
//    document.getElementById("box3").innerHTML = "<h1>" + num1 + " + " + num2 + " = " + sum + "</h1>";
    
    document.getElementById("box3").innerHTML = `<h1>${num1} + ${num2} = ${sum}</h1>`;
    
}


function sayHi() {
    var name = "Hank";
    alert("Hi " + name); // Hi Hank
}

sayHi();

function sayBye() {
    alert("'Bye, " + name); // Bye Hank
}

sayBye();