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