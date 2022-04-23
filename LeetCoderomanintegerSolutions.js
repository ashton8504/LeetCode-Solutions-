/**
 * @param {string} s
 * @return {number}
 */

//SOLUTION 1:
var romanToInt = function(s) {
    //This is a map thats constant and its our symbols and Values being defined
    //Const (constant) keyword that defines a variable or pointer as unchangeable
    //map is a high order function that applie a given function to each
    //element in a collection, below is our collection
    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    //let res = let result is being set to zero
    //let allows you to declare variables that are limited to block statemen or expression
    //res in programming means result, below is means:
    //let res = 0 which states let result = 0
    let res = 0;
    //s.split('') is method(function) that splits a string into an array of substrings
    //.forEach is a method (function) that calls a function for each element in an array
    // => is an arrow function its compact alternative to a tradtional function
    s.split('').forEach((num, i) =>{
        //Below in english means: if map number is less than map[s[i +1]] res -= map[num]
        if(map[num] < map[s[i + 1]]) res -= map[num];
        //Below in english means: else result plus or = to map[num]
        else res += map[num];
    });
    //below means return result
    return res
};

//SOLUTION 2

/**
 * @param {string} s
 * @return {number}
 */

//Setting up constant map
const map ={
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    //let sum be equal to zero
    let sum = 0;
    //for loop which is saying in english let i be = 0
    //i is less than s(as defined above) length then add one
    for (let i = 0; i < s.length; i++){
        //this is saying let sign be equal to 1
        let sign = 1
        //this is saying if I is less than s.length and then (map[s[i + 1]] is equal to
        //map[s[i]] * 5 OR
        // map[s[i + 1]]  is equal to map[s[i]] * 10))
        if ( i < s.length -1 && (map[s[i + 1]] === map[s[i]] * 5 || map[s[i + 1]] === map[s[i]] * 10)){
            // this is saying sign times or = to negative one
            sign *= -1
        }
        //this is saying the sum plus or equal to times map[s[i]]
        sum += sign * map[s[i]]
    }
    //return sum
    return sum
};

//SOLUTION 3:

class Solution {
    //Numeral Pairs below, its an array
    //Goes from biggest to smallest
    //Now we can loop over this!
    private Numeral[] numerals = {
        new Numeral('M', 1000),
        new Numeral('CM', 900),
        new Numeral('D', 500),
        new Numeral('CD', 400),
        new Numeral('C', 100),
        new Numeral('XC', 90),
        new Numeral('L', 50),
        new Numeral('XL', 40),
        new Numeral('X', 10),
        new Numeral('IX', 9),
        new Numeral('V', 5),
        new Numeral('IV', 4),
        new Numeral('I', 1)
    };
    public String intToRoman(int num) {
    //Creating a result with an empty string
    String result ='';
    //loopin over all our numerals
    for (Numeral numeral : numerals) {
    int numberOfSymbols = num / numeral.value;
    //not equal to zero we add it to our result
    if (numberOfSymbols != 0) result += numeral.symbol.repeat(numberOfSymbols);
    num %= numeral.value;
}
//Outside for loop we return our result
return result;
}
//Creating a class called Number
class Numeral {
    public String symbol;
    public int value;
    //Creating a constructer and pasying in two parameters
    public Numeral(String symbol, int value){
    //this is where we assign the constructors
    this.symbol = symbol;
    this.value = value;
}
}
}
