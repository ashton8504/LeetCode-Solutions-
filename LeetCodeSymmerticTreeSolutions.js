//Solution 1

//anonymous functions is a functin that is not stored in a program file, but associated with a variable
//whose data type if a function_handle.
//Anonymous functions can accept multiple inputs and rreturn one output
//anonymous function with the parameter of root
//{} opens the curly brackets
var isSymmetric = function(root) {
//declaring a variable within our function
    let res = true;
//function within a function and has two parameters node1 and node2
    function helper(node1, node2){
        if(!node1 && !node2){
            return
        }
        //This is an if statement which is a block of code to be executed if condition is true
        //this is saying if !node1 or !node2 or node1.val is not equal or not equal type to node2.val
        if (!node1 || !node2 || node1.val !== node2.val){
            //then return our result and its false
            res = false;
            return;
        }
        //These are helper functions
        helper(node1.left, node2.right);
        helper(node1.right, node2.left)
    }
    helper(root,  root);
    return res;
};

//Solution 2

//anonymous function with parameter of root
const isSymmetric = function(root){
//checking for an edge case
    if(!root) return true;
//if there is a root then we will traverse through tree
    return traverse(root.left, root.right);
}
//below is a function with two parameters and we are defining the function
function traverse(node1, node2){
//if node1 and node2 are false (!) return true
    if(!node1 && !node2) return true;
//if node1 or node2 are false return false
    if(!node1 || !node2) return false;
//if node1.val doesnt equal node2.val return false
    if(node1.val !== node2.val) return false;
    //below will return are result
    return traverse(node1.left, node2.right)  && traverse(node1.right, node2.left);
}