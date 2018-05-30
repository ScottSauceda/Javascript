// document.write("Hello World from JS!");
      
//    document.getElementById("box1").innerHTML = "<h1>Hello World From JS!</h1>";
      
    // This is a one-line Javascript comment.
      
    /* This is a multi-line Javascript comment.
    
        It can be as many lines long as needed.    */
        
    function greetUser() {
        
    var firstName = document.getElementById('firstName').value ;
        
    var lastName = document.getElementById('lastName').value;
        
    var msg = "<h1 style=\"color:blue\"> Hello" + firstName + " " + lastName + ' from JS!</h1>'
    
    document.getElementById("box1").innerHTML = msg; // output msg
        
    }
        
    var faveFruit = 'Mangoes';
        
    var message = firstName + " likes " + faveFruit;
    
//    console.log(message);
      
        
    var myScore = 3200;
        
//    console.log(myScore);
        
    var score1 = 5500;
        
    var score2 = 3800;
        
    var totScore = score1 + score2;
        
//    console.log(totScore);  
    
    // what happens if you add numbers in quotes?
    
    // console.log('2' + '2'); // You get 22. '2' is a string
        
    var finalGrade = 99; // finalGrade declared as a Number
        
//    console.log(finalGrade);
        
    finalGrade = 'A+'; // finalGrade is changed to a String
        
//    console.log(finalGrade);
        
    var couponCode = "Deal2018"; // declared as a string
        
//    console.log(couponCode);
        
    couponCode = 123456;
        
//    console.log(typeof(couponCode)); // Numbers
        
    var winningTicket; // no inital value assigned
        
//    alert( winningTicket); // Undefined
        
    var loggedIn = false;
        
//    alert(loggedIn); // false
        
//    alert(typeof(loggedIn)); // boolean
        
    function sayHello() {
        console.log("Hello World"); // console log
    }
        
    sayHello(); // call the function

    function calculate() {
        
    var num1 = document.getElementById("num1").value;
    
    num1 = Number(num1);
    
    var num2 = document.getElementById("num2").value;
        
    num2 = Number(num2);
        
    var sum = num1 + num2;
        
//    var result = '<h1>' + num1 + " + " + num2 + " = " + sum + '</h1>';
        
    var result = `<h1> ${num1} + ${num2} = ${sum} </h1>`;
        
    document.getElementById('box3').innerHTML = result;
        
    }

    var name="Hank";

    function sayHi() {
//        alert("Hi " + name); // Hi Hank
    }

    sayHi();

    function sayBye() {
//        alert("'Bye, " + name); // 'Bye, Hank
    }

sayBye();