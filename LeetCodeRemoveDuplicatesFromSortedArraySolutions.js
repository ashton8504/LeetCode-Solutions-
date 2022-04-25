// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

//SOLUTION 1:

//Below is our function
//In JS function is a block of code designed to perform a task
var removeDuplicates = function(arr) {
    //creating an index counter
    let indexCounter = 0;
    //for loop: loops through a block of code a number of times
    //for loop syntax:
    //for (statement 1; statement 2; statement 3){
    //code block to be excecuted
    //}
    //Statement 1 (initialize) is executed (one time) before the execution of code block (let i = 0)
    //Statement 2 (initial variable) defines the condition for executing the code block (i < arr.length;)
    //Statement 3 (increments, in code below its positive) is executed (everytime)
    //after the code block has been executed (i++)
    for(let i = 0; i < arr.length; i++){
        //if statement
        //In English if array i is not equal to arr[i -1]
        if(arr[i] != arr[i -1]){
            //then arr[indexCounter] is equal to arr[i]
            arr[indexCounter] = arr[i]
            //increment
            indexCounter++
        }
    }
    //return statement that is attached to our variable we created above:
    //let indexCounter = 0
    return indexCounter
};

//SOLUTION 2:

/**
 * @param {number[]} nums
 * @return {number}
 */

//Here is our function
//{} open up a block of code
var removeDuplicates = function(nums) {
    //this is our index that we are setting to 1
    //let is an expression that defines a functin or value
    let index = 1
    //for loop
    //if i = 0 and i is less than nums length subtract one and increment
    for(let i = 0; i < nums.length -1; i++){
        //if nums[i] is not equal to nums[i+1]
        if(nums[i] !== nums[i+1]){
            nums[index] = nums[i+1]
            //here we are incrementing
            index ++
        }
    }
    //return statement
    return index
};