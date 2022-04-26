//SOLUTION 1

//Our Function with Parameters (haystack, needle)
var strStr = function(haystack, needle) {
    //needle length is equal to zero then return zero
    if(needle.length === 0) return 0
    for(let i = 0; i < haystack.length; i ++){
        let k = i;
        j = 0
        //while the haystack k is = to needle j or j is less than needle length
        while(haystack[k] == needle[j] & j < needle.length){
            //increment k
            k++
            //increment j
            j++
        }
        //if needle length is equal to J then return i
        if(needle.length == j) return i
    }
    //return or we are calling
    return -1
}
