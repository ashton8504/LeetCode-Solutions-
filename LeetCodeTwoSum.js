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
//WhiteBoardSolution with BruteForce:
    //forEach num, index in nums
    //forEach num2, index2 in nums
    //if num + num2 = target
    //return [index, index2]
    //end
    //end
    //end
//WhiteBoard Solution VIA code below:
    //forEach num, index in nums
    //neededValue = Target - num
    //index2 = prevValues[neededValues]
    //if index2 != null
    //return [index2, i]
    //else
    //prevValues[num] = index
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//SOLUTION 1:
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

//SOLUTION 2:

//JavaScript Object Solution

//Function is simple a "chunk" of code
//twoSum = Function Name
//(nums, target) = our Parameters that are seperated by commas
function twoSum(nums, target) {

    //Here we are creating a "Map" object that holds key-value pairs
    //This is creating a "Map" called compliment (Maps introduced in ES6)
    const comp = new Map();
    //This will grab the Array VIA Length
    const len = nums.length;
    //ForLoop: control flow statment for specifying iteration, allows code to be executed and repeated
    for(let i = 0; i<len ; i++){
        //This means if comp equals greater or less than 0
        if(comp[nums[i]] >=0){
            //Then return the index of the number itself and the comp
            //I believe this is two indexs below
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i;
    }

    return []

};
