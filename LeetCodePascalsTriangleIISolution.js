//anoymous function below, our parameter is rowIndex
//{} opens up the code block
var getRow = function(rowIndex) {
    //declaring a variable to an empty array
    let row = [];

    //if statement that is stating if rowIndex is less than 0, then return row
    if (rowIndex < 0) {
        return row;
    }
//this is row.push(1); push is a method that adds one or more element to the length of array
//push() method will add to the end of an array whereas unshift() adds to the start of an array
    row.push(1);
//for loop which states set index i to equal 1, then if index (i) is less than or equal to rowIndex
// then increment by 1
    for (let i = 1; i <= rowIndex; i++){
//for loop inside a loop, states if j is equal to rows length minus 1, decrement by 1
        for(let j = row.length -1;  j > 0; j--){
//this is stating that row[j] is equal to row[j -1] plus row[j]
            row[j] = row[j - 1] + row[j];
        }
//this is stating row.push(1) pushing into our array at end.
        row.push(1);
    }
    //this is return the solution and our variable row
    return row;
};