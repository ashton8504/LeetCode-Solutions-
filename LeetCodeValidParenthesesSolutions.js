//Solution 1

/**
 * @param {string} s
 * @return {boolean}
 */
//Video I watched discussed Edge Cases
//Edge Case in Programming typically has input values
//the require special handling in an algorithm behind a computer program
//Algorithm is a procedure or formula used for solving problems
//Video discussed when looking at problems what kinda of data structure would we use
//Data structures are methods (functions?) of storing and organizing data


var isValid = function(s) {
    //this is creating an object
    //this object has three values
    let bracket = {
        '(':')',
        '[':']',
        '{':'}'
    }
    //we are creating a array? with heap
    //heap is a tree-based data structure which is an almost complete tree
    //that satisfies the heap property
    let heap = [];
    //now we can iterate through a solution
    //iterative refers to a sequence of instructions or
    //code being repeated until a specific end result is achieved
    //let character of s (value)
    for(let char of s){
        //if my bracket at the character
        if(bracket[char]){
            //if its true we can push at the character
            //Definition and usage of push()
            //adds new items to the end of an array
            //changes length of array
            //returns  the new length
            heap.push(bracket[char])
            //so if above is not true we use else
        }else{
            //if heap.pop does not equal to character we want then fail
            //heap.pop will return the last item
            //pop() method (function) removes the last element from an array
            //and returns that element
            //this method changes the length of the array
            if(heap.pop()!== char) return false
        }
    }
    //in  case that does exist return heap.length
    //return statements are calling what we wrote
    return(!heap.length)
};

//Solution 2

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mappings=new Map();
    //three keys below for different brackets
    mappings.set('(',')');
    mappings.set('[',']');
    mappings.set('{','}');
    //creating an array named stack so we can loop through
    const stack=[];
    //this this a for loop
    //let i=0 means we are setting i to 0 (initialization)
    //i<s.length is saying if i is less than s.length (condition)
    //i++ means add one(iteration)
    for(let i=0; i<s.length; i++){
        //if  mapping has open bracket, then we push value into stack
        if(mappings.has(s[i])){
            //this is pushing value into stack
            //we are pushing a closed bracket when we see an open bracket
            stack.push(mappings.get(s[i]));
            //this is saying else if we dont see the value we can pop it out and compare
        }else if (stack.pop()!==s[i]){
            //if pop up value  doesnt return bracket we return false
            return false;
        }
    }
    //checking to see if length equals zero
    return stack.length===0;
};

//Solution 3
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //First Define a Hash Map with 3 keys
    //the keys are the opening brackets
    //values are the closing brackets
    const hashMap = {"(": ")", "{":"}", "[":"]"}
    //here we will define ourstack
    const stack=[]; //this is an array
    for(let ch of s){
        //ch is an opening bracket
        if(hashMap[ch]){
            stack.push(hashMap[ch])
        }else if(stack.length > 0 && stack[stack.length -1] === ch){
            //ch is a closing bracket and top of stack matches
            stack.pop()
        } else {
            //ch is a closing bracket and top of the stack doesnt match
            return  false
        }
    }
    return stack.length === 0
};
