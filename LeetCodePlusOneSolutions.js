//Below is our function which is tied to const plusOne
//{} Opens the code block
const plusOne = function(digits) {
    //Below is a for loop (a control flow statement for specifying iteration which allows code to rur)
    //i is equal to digits length minus one, if i is greater than or equal to zero
    //decrement (subtract one)
    for(let i = digits.length -1; i >= 0; i--){
        //below is an if statement (conditional statement)
        //if = to specify a block of code to be executed if a certain condition is true
        //digits[i] is less than 9
        if (digits[i] < 9){
            //digits[i] = digits[i] plus one
            digits[i] = digits[i] +1;
            //then return digits (calling the if statement?)
            return digits;
            //else statement which is the condition to run if same condition is false
        } else {
            //digits[i] equals zero
            digits[i] =0;
        }
    }
    //digts.unshift(1)
    //just a method adds one or more elements to the start of an array and returns the new  length
    digits.unshift(1)
    //calls/returns solutions
    return digits
};