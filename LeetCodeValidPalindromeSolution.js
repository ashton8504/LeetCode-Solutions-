//anoymous function that will store our code block
var isPalindrome = function(str) {
//3 variables below
    //this is a split method, divides a string into OL of substrings
    let arr = str.split('')
    //creating an empty array with this variable
    let result = []
    //greating a master list to run through
    let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'

    //for loop that loops through array
    for(let i of  arr){
        //looping through array
        if(alphabet.includes(i.toLowerCase())){
            //if true we are pushing in our answer
            result.push(i.toLowerCase())
        }
    }
    //returning result.join and comparing to its self reversed
    return(result.join('') == result.reverse().join(''))
};