//TWO SUM QUESTION

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

//Array = Is a data structure that can store fixed-size collection of elements of the same data type.  Used to store a collection of data ergo Variables
//Integer = In Computer Programming its a data type used to represent real numbers that do not have fractional values
//Indices (Index) = Is a method of sorting data by creating keywords or a listing of data
//Element = a single part of a larger group

//What the question is asking us to do in english:
    //Given an array of numbers, we have a target and we need to sort the data so it returns two numbers that add up to the target.
    //We are not allowed to use the same element twice (same numbers for the solution to this problem)
    // Doesn't matter how we return the number, it can be in any order! 

//Given:
    //num:[int]
    //target: int
//Return:
    //Array of indices
    //Adding to target
//WhiteBoardSolution:
    //forEach num, index in nums
    //forEach num2, index2 in nums
    //if num + num2 = target
    //return [index, index2]
    //end
    //end
    //end

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//empty object
    const previousValues = {}
//for loop that runs through numbers
    for (let i = 0; i < nums.length; i++){
        //current number set to 0 (index of [i] based on our for loop)
        const currentNumber = nums[i]
        //gets neededValue from subtracting target - currentNumber
        const neededValue = target - currentNumber
        //Checking to see if we have an index of 2 that is equal to that, checking object of neededValue
        const index2 = previousValues[neededValue]
        //If we have something of index2 and it's not  equal null (Null is a built-in constant that has a value of zero) it will return
        if (index2 != null){
            //This would return index2 if we have a value or i which is 0 (null)
            return [index2, i]
        } else {
            previousValues[currentNumber] = i
        }
    }
};