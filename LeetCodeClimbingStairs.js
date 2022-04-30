//Below is an anonymous function with parameter(argument) of n
//{} we then open up the code block with curly brackets
var climbStairs = function(n) {
//below is our variable
//const means consistant and our variable name is memo
//[1,1,2] is an array and the "Value" of our variable
    const memo = [1,1,2];
//This is a for loop and a for loop consist of three parts
//a for loop as three parts
//statement 1 (let i = 3)
//statement 2 (i <= n)
//statement 3 (i++)
//English: let i be equal to 3 and if i is less than or equal to n then increment (add) 1
    for(let i =  3;i <= n; i++){
//below is an example memo or memoization
//Memoization is a top down, depth first optimization technique of storing previously  executed computations
//we are saying memo[i] is equal to memo[i-1] plus memo[i-2]
        memo[i]=memo[i-1]+memo[i-2];
    }
//once above code runs we return the memo[n]
//Return statements are used to indicates the end of a given function's execution
    return memo[n]
};