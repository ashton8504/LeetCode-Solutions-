//anonymous function below, two paramters (p and q)
//{} open the code block
var isSameTree = function(p, q) {
//if statement
//if p is strictly equal to null and q is strictly equal to null then return true
    if(p === null && q === null) return true;
//if p strictly equal to null and q is not strictly equal to null or p is not strictly equal to null
//and q  is strictly equal to null OR p.val is not strictly equal to q.val
    if ((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)){
        //return false
        return false;
    }
//Return p.left q.left and p.rright q.right
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};