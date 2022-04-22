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

//SOLUTION 2


//Palindrome: Reads backwards as forward

//toString() a method returns a string representing the object

//function in JS is a set of statements that perform a task or calculates a value

//Concatenating a method that "merges" the contents of two or more strings

var isPalindrome = function(x) {
    //Declaring empty string
    let reversedStr = ''
    //Below we are setting "x" to a string (string version of 121)
    let xStr = x.toString()
    //For Loop
    for (let i of xStr){
        reversedStr = i + reversedStr
        // console.log(reversedStr)
    }
    //Comparing reversed string to the stringify version of X
    //Will give us true or false
    return(reversedStr === xStr)
};

//SOLUTION 3:

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //if x is less than zero its not Palindrome
    if (x < 0){
        return false;
    }
    //if x is less than 10 its a palindrome
    if (x<10){
        return true;
    }
    if(x % 10 === 0){
        return false;
    }
    //This line converts number into strings
    const str = String(x);
    //i will now = 0
    let i = 0;
    //j = string length -1
    let j = str.length-1;
    //this is a while loop
    while(i<j){
        //if string[i] is not = to str[j] then return false
        if(str[i] !== str[j]){
            return false;
        }
        //this assigns and then increments
        //The increment operator and will add 1
        i++;
        //This is a decrement and it will substract 1
        j--;
    }
    return true;
};