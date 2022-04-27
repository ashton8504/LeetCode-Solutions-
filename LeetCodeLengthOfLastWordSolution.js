var lengthOfLastWord = function(s) {
    let lastWordCount = 0;
    //for loop, i is set to s.length minus 1
    //i greater than or equal to 0, decremate 1
    for(let i = s.length -1; i >=  0; i--){
        //if s[i] is not equal to empty string begin second loop
        if(s[i] !== " "){
            //second for loop
            for (let j = i; j >=0; j--){
                //if s index of j not empty string incremate last word count
                if(s[j] !== " "){
                    lastWordCount++;
                }else{
                    //return lastWordCount
                    return lastWordCount;
                }
            }
            //return lastWordCount
            return lastWordCount;
        }
    }

};