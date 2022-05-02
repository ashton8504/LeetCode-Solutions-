
//anonymous function with the parameter numRows
//Parameter can also be called a function
//{} opens up our code block (code block is where the code will run)
var generate = function(numRows) {
//Below we are declaring a variable
//let can be changed and the name of variable is pascalsTriangle
//the value of our variable is new Array(numRows);
    let pascalsTriangle = new Array(numRows);
//this is a for loop to iterate over our code
//let i(index) is equal to one
//Then if i(index) is less than numRows
//add one which is i++
    for (let i = 0; i < numRows; i++){
//new variable below, but we are saying row is equal to new array(i +1) (index plus one)
        let row = new Array(i + 1);
//row[0] is equal to one
        row[0] = 1;
//row[row.length -1] is equal to 1
        row[row.length -1] = 1;
//Another for loop
//j is = 1, j if less than row.length then add 1
        for (let j = 1; j<row.length -1; j++){
//assigning a variable with the name let rowAbove be equal to pascalsTriangle[i-1];
            let rowAbove = pascalsTriangle[i-1];
//this is saying row[j] is equal to rowAbove[j] plus rowAbove[j-1]
            row[j] = rowAbove[j] + rowAbove[j-1]
        }
//this is saying pascalsTriangle[i] is equal to row
        pascalsTriangle[i] = row
    }
//this is returning our code
    return pascalsTriangle
};