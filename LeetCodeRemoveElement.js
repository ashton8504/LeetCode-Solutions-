// SOLUTION 1

//1 Create Index Variable (starting at 0)
//2 Loop through index
//  a. Condition if current value doesnt equal val
//      i.Set nums[index] to nums[i]
//      ii. Increment Index
//3.Return Index

//Below is a function we call var removeElement and our functions
//paremeters we will use are nums (numbers) and val (values)
var removeElement = function(nums, val) {
    //setting index to 0
    let index = 0;
    //for loop: i is set to zero
    //if i is less than numbers length then increment 1
    for (let i = 0; i < nums.length; i++){
        //This is  our condition that states if nums[i] doesnt equal value
        //we change it to make nums[index] to equal nums[i]
        if (nums[i] !== val){
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

//SOLUTION 2

//Cleaning up name of our function for better syntax
function removeElement (nums, val) {
    //this will check to see if our nums array is true or not
    if(!nums) return 0;
    //for loop, i is set to zero and if i is less than our nums length  then increment 1
    for(let i= 0;  i < nums.length; i++){
        //if checking to see if nums[i] is equal to the value we are looking for
        if(nums[i]===val){
            //if we find value we are  looking for then we can splice  it with  values i & 0
            //splice is a method (function) that changes the contents of an array
            //by removing or replacing existing elements and/or adding  new elements
            nums.splice(i,1)
            i--
        }
    }
    //calling or returning nums.length
    return nums.length;

};
