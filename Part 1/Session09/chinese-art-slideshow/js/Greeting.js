class Greeting {
    
    // this class must be instantiated to work: 
    // var dateTime = new Date()
    // var greeting = new Greeting()
    // upon instantiation, anything inside the constructor function runs
    // once, automatically
    constructor () {
        
        this.hello = "The Greeting() Class Constructor Function Says: Hello World!"
        return this.hello
        
    } // close constructor
    
    // a method that gets the full date time, concats a personalized timely greeting and returns it, so that when the method is called, the greeting can be stored in a variable
    greetUser(name) {
        
        let dateTime = new Date()
        let hour = dateTime.getHours()
        let greeting = ''
        let timeSuffix = 'PM'

        // decide on a timely greeting based on the hour
        if(hour < 12) {
            greeting = `  &nbsp;   &nbsp;  Good Morning ${name}!`
            timeSuffix = 'AM'
        } else if(hour < 18) {
            greeting = ` &nbsp;   &nbsp;  Good Afternoon ${name}!`
        } else {
            greeting = ` &nbsp;   &nbsp;  Good Evening ${name}!`
        }
        
        // convert hour from military time to 'regular' time: 14 becomes 2
        if(hour > 12) { // if hour is 13-23 (13:00 - 23:00 hours)
            hour -= 12 // subtract 12 to get 1:00 - 11:00 PM
        }
        
        // add a leading 0 to minutes if less than 10, so we get 3
        let minute = dateTime.getMinutes()
        if(minute < 10) {
            minute = '0' + minute
        }

        // add to the timely greeting the current time
        greeting += ` &nbsp;  &nbsp;  &nbsp; The time is ${hour}:${minute} ${timeSuffix}`  
        
        return greeting // method call set to variable. var set equal to greeting
        
    } // constructor
    
} // class Greeting