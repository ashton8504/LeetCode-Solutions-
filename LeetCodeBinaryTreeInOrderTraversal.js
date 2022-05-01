//anonymous function with one parameter
var inorderTraversal = function(root) {
    //creating a variable and then assigning a value of an array
    let array = [];
//Traversal is a data structuer that means we visit or touch the elements
//and do something with the data
    traversal(array, root);
//returning the array after code runs
    return array;
};
//I believe this is using code above to set up a traversal function
//this is a function with two parameters (arguments) and we are using an arrrow function
traversal = (array,node) => {
//if node is stricly equal to null then return
    if(node === null) return;
//This is calling our function and passing in an array and node.left
    traversal(array, node.left);
//here we are pushing a value (node.val) into our arrrary
    array.push(node.val);
//this is calling our function and passing in an array and node.right
    traversal(array, node.right);
}
