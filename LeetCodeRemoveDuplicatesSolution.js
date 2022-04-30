//anonymous function below,named deleteDuplicates
//Our function has one parameter entitled head
//{} sets up the code block
var deleteDuplicates = function(head) {
    //naming our variable below
    //let cur is variable and head is the value
    let cur = head;

//Below is a while loop
//while loops, loop through a block of code as long as specified  condition is true
//first line states while cur and cur.next then run whats inside the {}
    while(cur && cur.next){
//if cur.val equals (below is loose equality) cur.next.val then
//run cur.next equals cur.next.next
        if(cur.val == cur.next.val){
            cur.next = cur.next.next;
//below is an else statement to run if above code is not true
        }else{
//if above code is not true then cur equals cur.next
            cur = cur.next;
        }
    }
//Below is our return statement which indicates the end of our  loop
    return head;
};