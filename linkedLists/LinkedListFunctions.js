let LinkedList = require("./singlyLinkedList.js")
let Node = require("./Node.js")


let linkedList = new LinkedList();

//Remove Dups from Cracking the coding interview linked list section 2.1 pg 94

function removeDups(linked, val){
    let current = linked.head;
    if(current === null){
        console.log("This list is already empty")
        return linked;
    }

    if(current.value === val){
        if(current.head === null){
            linked.head = null;
            return linked;
        } else {
            linked.head = current.next;
        }
    }

    while(current != null){
        if(current.next.value === val){
            current.next = current.next.next
        }
        current = current.next;
    }
    return linked;
}

linkedList.insertAtBeginning(451);
linkedList.insertAtBeginning(3);
linkedList.insertAtBeginning(5);
linkedList.insertAtBeginning(17);
linkedList.insertAtBeginning(5);
linkedList.insertAtBeginning(33);
linkedList.insertAtBeginning(47);
linkedList.insertAtBeginning(5);
linkedList.insertAtBeginning(59);
linkedList.insertAtBeginning(5);
let list = linkedList.printList()
console.log(list)
// console.log(linkedList)
// linkedList = removeDups(linkedList, 5);
// list = linkedList.printList();
// console.log(list)

/* An algorithm from Cracking the coding interview to find the kth to last element 
of a singly linked list. Problem 2.2 */

function kthToLast(linkedList, k){
    let reversed = linkedList.reverse()
    let current = reversed.head;

    let index = 0;

    while(index < k){
        current = current.next;
        index += 1
    }

    return current;

}

// let node = kthToLast(linkedList, 3);
// console.log(node)

//An algorithm to delete a node in the middle given only access to that node 
//from Cracking the coding interview Problem 2.3

// a -> b -> c -> d -> e -> f
//a -> c -> d -> e -> f -> node

function deleteMiddleNode(linkedList, node){
    
    if(node === null){
        console.log("node is null")
        return
    }

    while(node.next !== null){
        node.value = node.next.value
        if(node.next.next === null){
            node.next = null;
            break;
        }
        node = node.next        
    }

    return;
}

//gets a node a specific index

let n = linkedList.getNode(4)
deleteMiddleNode(linkedList,n)
linkedList.printList()
