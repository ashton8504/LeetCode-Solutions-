/**
 * @param {number} x
 * @return {boolean}
 */

//Palindrome: Reads backwards as forward

//toString() a method returns a string representing the object

//split() method that divides a string into an ordered list of substrings, they put substrings
//into an array or they return an array

//reverse() a method that reverses an array in place

//.join() a method creates and returns a new string by concatenating all of the elements in an
//array (or an array-like object), seperated by commas or specified separator string

//Method: a JS method is a property containing a function definition

//function in JS is a set of statements that perform a task or calculates a value

//Concatenating a method that "merges" the contents of two or more strings

    //Solution 1 
var isPalindrome = function(x) {
    //How you get a string and reverse the string
    //let reversed is beging set to input x and converting to string
    //Then we are splitting it
    //Then we are reversing it
    //Then we are joining it
    let reversed = x.toString().split('').reverse().join('')
    //we are returning above code below with a return statement
    //and comparing x.toString to reversed to see if its reversed
    return (x.toString() === reversed)
};
console.log(isPalindrome)