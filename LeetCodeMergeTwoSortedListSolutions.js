/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//The Goal of this is two take two list and put them into one list
//We can use the splice method:
//splice() method adds and/or removes array elements
//splice() method overwrites original array

var mergeTwoLists = function(l1, l2) {
    //creating a new list node
    let curr=new ListNode();
    const dummy=curr;
    //while loop: is stating while l1 &&(and)l2
    while(l1&&l2){
        //if l1 value is less than l2 value, this is a comparison because we are comparing two parameters
        if(l1.val<l2.val){
            //this is the whole value of our parameter l1
            curr.next=l1;
            //this is saying l1 is pointing to l1.next
            l1=l1.next;
        }else{
            //this is the whole value of our parameter l2
            curr.next=l2;
            //this is saying l2 is pointing to l2.next
            l2=l2.next
        }
        //moving current value to curr.next
        curr=curr.next;
    }
    if(l1){
        curr.next=l1;
    }
    if(l2){
        curr.next=l2;
    }
    return dummy.next
};