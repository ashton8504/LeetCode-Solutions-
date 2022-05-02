//anonymous function with parameter of root
//{} opens up curly brackets
var isBalanced = function(root) {
    //creating a variable
    let res = true;
//below is an arrow function with a parameter of node
    let maxDepth = (node) =>{
//if nodes does return then we return 0 (exits function)
        if(!node) return 0;
//this is saying let l = maxDepth(node.left) and r is equal to maxDepth(node.right)
//Basically assigning variables inside arrow function?
        let l = maxDepth(node.left), r = maxDepth(node.right);
//this is saying  if Math.abs (l- r) >1) then return false
//Math.abs is a function that returns the absolute value of a number
        if(Math.abs(l -r ) > 1) res = false;
//this is returning 1 plus the result of Math.max(l, r)
//Math.max() is a function that returns the largest of the zero or more numbers given in parameters
        return 1 + Math.max(l, r);
    }
//below is returning our function
    maxDepth(root);
    return res;
};