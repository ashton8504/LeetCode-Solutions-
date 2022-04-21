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

//SOLUTION 3:

//Brute Force Method which is a Naive Approach

//Const in programming is a keyword that defines variable or pointer as unchangeable

//twoSum will be our variable

//variable = are used to store info to be referenced or maniuplated in a computer program

//Parameters will be array & target

//Parameters = is a formal argument, these pieces of data are values of our arguments (array&target)

//Below Code is using an arrow function (=>)

//An arrow function expression is a compact alternative to a tradiontal function expression

//Function Expression = a keyword that can be used to define a function inside an expression

//Below code uses {} & []

//{} = object value pair (below we have 2?)

//[] = array-values

//JavaScript for loop executes a block of code as long as a specified condition is true

//Below we are using a for loop inside a for loop

//for (initialization; condition; increment) {
// Execute code
//}

//initialization = let i = 0; (used to declare a counter variable)
//condition = i < array.length (the condition that is evaluated before each loops stars)
//increment = i++ (updates the loop counter each time the loop is executed)

const twoSum = (array, target) => {
    //initialization declares our variable (let i = 0),
    //tells our program to start a counter called i that has an intial value of 0
    //condition our loop is using i < array.length;
    //this tells our program that our loop should run when i (0) is less than our arrays length
    //increment (i++) this is telling our loop to
    //add 1 to the variable i each time the loop is executed
    for ( let i = 0; i < array.length; i++) {
        //Below is a nested loop within a loop which is a inner loop within the body of an outer loop
        //intialization, condtion and increment will be different than previous loop
        // as we are targeting another number per exercise: "return indices of the two numbers ""
        for ( let j= i++; i< array.length; j++) {
            //this is saying if our second array (loop) is === to target minus (-)
            // our first array(loop) then we return two values i & j else we return null
            if ( array[j] === target - array[i]) return [i, j]
        };
    };
    return null;
};

//SOLUTION 4 Another Style of Brute Force

//Brute Force - Approach that is not optimized
// Did another Brute Force  for different syntax etc
//(source The Code Creative - How to solve LeetCode Two Sum)
function twoSum (arr, target) {
    //For Loop Below
    for (let i = 0; i < arr.length; i++) {
        //Nested Loop (loop inside of a loop)
        for (let j = i + 1; j < arr.length; j++) {
            //Code below is telling us if code above is hitting the target
            // arr[i] = first loop we set up
            //arr[j] = Second Loop
            if (arr[i] + arr[j] === target) {
                //this returns if we hit the target
                return [i, j]
            }
        }
    }
}
// const num1 = [2, 7, 11, 15] //This is an array
// console.log(twoSum(nums1, 9)) //[0,1]

//SOLUTION 5
// Two-Pass Hash Solution

function twoSum (nums, target){
    //hashMap - improves time complexity
    //hashMap - object in JS where we store key value pairs
    //{} = Empty Object Below
    const hashMap = {}
    //For Loop
    for (let i = 0; i < nums.length; i++){
        //Key Value Pairs Below
        //[nums[i]] = integers in array below
        //Below we are storing each one of those as keys in hashMap
        //Setting those values to the key of i which means index
        hashMap[nums[i]] = i;
    }
    //Second for loop since this is a "two-pass"
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        //below is saying if complement is in the hashMap and hashMap Complement doesnt = i
        //then it will return answer
        if(hashMap[complement] && hashMap[complement] !== i) {
            return[i, hashMap[complement]]
        }
    }
}
const num1 = [2, 7, 11, 15] //This is an array

//SOLUTION 6
// One-Pass Hash Solution

function twoSum (nums, target){
    //hashMap - improves time complexity
    //hashMap - object in JS where we store key value pairs
    //{} = Empty Object Below
    const hashMap = {}
    //one for loop since this is a "one-pass"
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        //below is saying if complement is in the hashMap, then we will return it
        if(complement in hashMap) {
            return[i, hashMap[complement]]
        }
        hashMap[nums[i]] = i;
    }
}
const num1 = [2, 7, 11, 15] //This is an array