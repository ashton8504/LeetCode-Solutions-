//anonymous function below
//{} opens the code block for  our solution
var sortedArrayToBST = function(nums, left = 0, right = nums.length -1) {
    //this is saying if less is greater than right, return null (exits code)
    if(left > right) return null
//variable named mid and its saying it equals Math.floor left plus right and divided by 2
//Math.floor() function returns largest integer (number) less than or equal to a give number
    let mid = Math.floor((left + right) / 2);
//this variable is creating our root
//its saying root equals new treeNode
    let root = new TreeNode(nums[mid]);
//this is saying left side of root is equal to nums, mid, left and mid minus one
    root.left = sortedArrayToBST(nums, left, mid -1);
//this is saying right side of root is equalto nums, mid plus one
    root.right = sortedArrayToBST(nums, mid + 1, right);

    //returning our function
    return root;
};