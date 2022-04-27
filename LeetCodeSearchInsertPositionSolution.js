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