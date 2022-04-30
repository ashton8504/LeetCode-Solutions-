//Below anonymous function named merge
//we have 4 parameters(arguments) which are
//nums1, m, nums2, n
//Then we open up for code block with {}
var merge = function(nums1, m, nums2, n) {
//we are declaring three variables
    //let first equals m minus 1
    let first = m - 1;
    //let second equals n minus 1
    let second =  n - 1;
    //let i equals m plus n minus 1
    let i =  m + n - 1;
//below is a while loop
//simply stating if second is greater or equal to 0 then run loop
//{} opens up the loop
    while(second  >= 0) {
        //defining  our two variables
        let fVal = nums1[first];
        let sVal = nums2[second];
//if statement that is saying if fVal is greater than sVal then run code
        if(fVal >  sVal){
            //if above line is true then nums1[i] equals fVal
            nums1[i] = fVal;
            //then decrement one (subtract)
            i--;
            first--;
            //else statement to run if above condtion not meant
        } else {
            //if above is not true then nums1[i] is equal to sVal
            nums1[i] = sVal;
            //decrement (subtract one)
            i--;
            second--;
        }
    }
};

