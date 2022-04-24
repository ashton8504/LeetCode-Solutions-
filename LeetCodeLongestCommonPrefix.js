//SOLUTION 1:

//Basically we will loop through array of strings
//Compare words
//var means variable
//longestCommonPrefix is the name
//it  equals = function(strs)
//{} is what we do to setup a code block
var longestCommonPrefix = function(strs) {
    //In english this is saying is strings length equals zero
//return is setup to empty string
    if (strs.length == 0) {
        return  "";
    }
    //creating a variable with prefix
    //let allows us to change things inside code unlike const
    //str[0] setting  strings to an index of 0 (first word which is flower)
    let prefix = strs[0];
    //for loop(repeat a block of  code a number of times), three statements to a for loop
    //Statement 1 (let i = 1) we initialize variable
    //Statement 2 (i < strs.length)  we evaluate the condition of the intial variable
    //Statement 3 (i++) we increment (add 1)
    //In English set i to equal one, if i(1) is less than a strings length add  1
    //Basically looping through index strings
    for (let i = 1; i < strs.length; i++) {
        //while loop inside a for loop
        //while loops through a block of code while a specified condition is true
        //See if we can find a common prefix
        while (strs[i].indexOf(prefix) != 0) {
            //this resets prefix to a substring, based on video dont fully get that
            prefix = prefix.substring(0, prefix.length -1);
        }
    }
    //we are returning (calling) above code to return :)
    return prefix
};


//Solution 2 (Vertical Method)
//pseudo code:
// //prefix = '';
//loop through characters  (char, index)
//loop through strs (str)
//if str[index] != char
//return prefix
//prefix = prefix + char
//return prefix
var longestCommonPrefix = function(strs) {
//Setting  prefix to empty string;
    let prefix = ''
//if strings are equal to zero (nothing in array) we can return prefix
    if(strs.length === 0) return prefix
    //Loop through all characters of first string
    for(let i = 0; i < strs[0].length; i++){
        const character = strs[0][i]
        for(let j = 0; j < strs.length; j++){
            //We are saying if they are not equal return our prefix
            if (strs[j][i] !== character)  return prefix
        }
        prefix = prefix + character
    }
    //this returns prefix
    //we are calling it
    return prefix

};