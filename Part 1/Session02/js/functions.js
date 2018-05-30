 function greetuser () {
        
    // Get first name from input
      
    var firstname = document.getElementById('firstname').value;
        
    // Get last name from input    
        
    var lastname = document.getElementById('lastname').value;
        
    // Create a message "Hello firstname lastname"    
        
    var msg = 'Hello ' + firstname + " " + lastname;
        
    // Display the message in box1
    
        document.getElementById('box1').innerHTML = msg;
        
    }
     

function calculate () {
    
    //
    
    var num1 = document.getElementById('num1').value
    num1 = Number(num1);
    
    //
    
    var num2 = document.getElementById('num2').value
    num2 = Number(num2);
    
    //
    
    var sum = num1 + num2;
    
    document.getElementById('box3').innerHTML = sum;
    
}