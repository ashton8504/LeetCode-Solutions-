function maxSubArray(nums) {
    //setting up values
    let solution = nums[0];

    //now we iterate through an array with for loop
    //let i = 1, i less than nums length then iterate plus 1
    for(let i = 1; i < nums.length; i++){
//nums[i] will be equal to Math.max and options are in () 3 parameters
//Math.max() function returns the largest of the zero or more numbers given as input
//parameterrs, or NaN if none of parametersr can be converted
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1])
        solution = Math.max(solution,nums[i]);
    }
    //call function/return statement to solution
    return solution;
};