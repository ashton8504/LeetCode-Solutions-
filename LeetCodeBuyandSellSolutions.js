//anoymous function, updated var to let to go with ES6
//parameter (argument) is prices
//{} opens block of code to run
let maxProfit = function(prices) {
//Variable below with the name minBuyPrice and the value is prices[0]
    let minBuyPrice = prices[0]
//another variable with the name max and the value of 0
    let max = 0
//this is a for loop
//statement one is saying set i(index) to equal 1
//statement two is saying  if i(index) less than prices length
//statement 3 is saying if statement two is true then increment (add) 1
    for(let i = 1; i < prices.length; i++){
//this is saying that const(constant) sellPrice is set(equal) to prices[i]
        const sellPrice=prices[i]
//this is saying const(constant) profit is equal to sellPrice minus minBuyPrice
        const profit = sellPrice-minBuyPrice
//max is set to Math.max with two parameters max and profit
//Math.max() function (method) returns the largest of the zero or more numbers as input parameters(max, profit)
        max = Math.max(max, profit)
//minBuyPrice equal Math.min and its parameters
//Math.min function(method) returns the lowest-valued number passed into it
        minBuyPrice = Math.min(minBuyPrice, prices[i])
    }
//this is our return statement and its set to max for that sweet sweet gains #TheStandard
    return max
};