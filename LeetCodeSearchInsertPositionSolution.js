/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //this is setting up our pointers
    //in CS a pointer is an object in many languages
    //that stores a memory address
    let left = 0, right=nums.length -1;
    //if target is less than numbers left return 0
    if(target<nums[left]) return 0;
    //if target greater than numbers right return nums.length
    if(target>nums[right]) return nums.length
    //while left is less than or equal to right
    while(left<=right){
        //this is defining mid to equal Math.floor
        //then we take left + right values and divide by 2
        let mid=Math.floor((left+right)/2);
        //if target strictly equal nums[mid] then return mid
        if(target===nums[mid]) return mid;
            //if not then if target is less than nums[mid]
        //subtract right by mid value minus one
        else if (target<nums[mid])right =mid-1;
        //lastly if its not above then return left to w=euqal mid plus 1
        else left=mid+1
    }
    //calling our code with return function
    return left
};

//SOLUTION 2

var searchInsert = function(nums, target) {
    //setting up values res =0
    let res = 0;
    //forEach loop with  paramters of n & i
    //forEach() executes a provided function once for each array element
    nums.forEach((n, i) => {
        //if n stricltly equals target then result is equal to i
        if(n === target) res = i;
        //else if so if above code does run  we do this
        else if(
            //if target is greater than n and target less than nums[i + 1]
            //or (||) nums[i+1] is undefined result is i+1
            target > n && (target < nums[i + 1] || nums[i + 1] === undefined))
            res = i + 1;
    });
    //callback function to return result
    return res;
};