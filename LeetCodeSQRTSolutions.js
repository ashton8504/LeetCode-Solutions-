var mySqrt = function(x) {
    let i = 0;
    let j = x;
//While Loop with the argument of if i is less than j
//While loops loop through a block of code  if a specified condition is true
    while(i < j){
//const stands for constant and block-scope is constant, meaning it cannot be changed, unlike let
//below we are saying middle is const and its equal to Math.ceil
//Math.ceil is a function that rounds up to the next largest integer(number)
//in code block (scope) below we are adding up i and j and then dividing by 2 then rounding up
        const middle = Math.ceil((i + j) / 2)
//this is saying our square is constant and it equals middle  **2
//** is an arithmetic operator that means Exponentiation
//exponentiatin operator (**) returns the result of raising the  first operand
//to the power of the secone  operhand
//an operhand is the part of the computer instruction that specifies data that is
//to be operating on or manipulated by extension or data
        const square = middle  ** 2
//if square strictly is equal to x then return middle
        if(square ===  x) return middle
//if square is less than x
        if(square < x){
//i = middle
            i = middle
//else condition if above is not true
        } else{
//then J will equal middle minus 1
            j = middle - 1
        }
    }
    //return/call the value of  i
    return i;
};