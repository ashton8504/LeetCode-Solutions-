//function with parameters(arguments) we gave the value of a and b
var addBinary = function(a, b) {
    //we are defining our object
    let sum = 0;
    //if statement which is a conditional statement
    //conditional statements are use to perform different actions that
    //that are based on different conditions being true or false
    //below is saying if a's length is less than 53 and b's length is less than 53
    if(a.length < 53 &&  b.length < 53){
        //if above statement is true we will run the block of code below
        //parseInt converts its first argument to a string, parses that string then returns an integer or NaN
        //below is saying sum equals two values that we will parseInt
        //We are parsing both of our parameters and adding them together
        //to return the sum into a string
        //we are also saying the basevalue is 2
        sum = parseInt(a, 2) + parseInt(b,2)
        //we are returning our sum to a string with a base value of 2
        return sum.toString(2)
        //if above is not true this is our else statement which is a conditional statement that runs
        //if the above if statement (conditional) is not true
    }else{
        //below is saying sum equals both arguments then we add and return our sum.toString
        //BigInt is a built in object in JavaScript that provides a way to represent whole numbers
        sum = BigInt("0b" + a) + BigInt("0b" + b)
        //we are returning our  sum to a string with a base value of  2
        return sum.toString(2)
    }
};