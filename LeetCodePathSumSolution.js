//anonymous function with two parameters
//{} opens up code block
var hasPathSum = function(root, sum) {
    //setting up our variable
    let res = false;
//this is creating a function called helper with two parameters node and currentSum
//{} opens up code block
    function helper(node, currentSum){
//if !node or res then return (exits function)
        if(!node || res){
            return;
        }
//this is saying our parameter above is plus or equal to node.val
        currentSum += node.val;
//if node left isnt and node right isnt and currentSum is stricly equal to sum
        if (!node.left && !node.right && currentSum === sum){
//then return true
            res = true;
        }
//These are helper functions and they call from your template (from above)
        helper(node.left, currentSum)
        helper(node.right, currentSum);
    }
//return results
    helper(root,0);
    return res;
};