//creating an arrow function
//the parameter of this arrow function is root
//{} opens up code block
const maxDepth = (root) =>  {
    //assigning  a variable  let maxDepth = 0
    let maxDepth = 0;
    //creating another arrow function
    //parameters are node and level
    // => tells us its an arrow function and {} opens up code block for this function
    //this function is inside our previous function
    //We call this nesting
    //Nest is where info is organized into layers
    let BFS = (node, level) =>{
        //this is saying of node is strictly equal to null then return (exit,this is a exit condtion)
        //if node equals null there is nothing to return thus exits code block
        if(node === null) return
        //if level is greater than maxDepth then maxDepth is equal to level
        if(level > maxDepth) maxDepth = level;
        //Believe these are calling on our nodes through Leet to be able to traverse with code above?
        BFS(node.left, level +1)
        BFS(node.right, level +1)
    }
//calling our BFS and returning maxDepth
    BFS(root, 1)
    return maxDepth;
}