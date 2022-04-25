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

//SOLUTION 2

// /*
// merging two list is simple
// keep merging two at a time till there is only one list left (lists.length ===1)

// */

function mergeList(a, b){
    let dummy = new ListNode(0);
    let current = dummy;

    while(a !== null && b !== null){
        if(a.val < b.val){
            current.next = a;
            a = a.next;
        }else{
            current.next = b;
            b = b.next;
        }

        current = current.next;
    }

    current.next = a || b;

    return dummy.next;
}

const mergeKLists = function(lists) {
    //This is an edge case
    //edge case is a boundary condition in programming
    if(lists.length === 0){
        return null;
    }

    //while list.length is greater than one keep merging
    while(lists.length > 1){
        //.shift() removes from element in array
        let a = lists.shift();
        let b = lists.shift();
        //this is merging two lists from above
        let mergedAB = mergeList(a,b);
        //taking merged list and pushing back into array
        lists.push(mergedAB);
    }
    return lists[0];
};