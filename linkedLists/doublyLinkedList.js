class Node{
    constructor(val){
        this.value = val;
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtBeginning(val){
        let newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return this;
        }

        let current = this.head;
        newNode.next = current;
        current.prev = newNode;
        newNode.prev = null;
        this.head = newNode;
        this.length += 1;
        return this;

    }
    insertAtEnd(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return this;
        }
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        
        current.next = newNode;
        newNode.next = null;
        newNode.prev = current;
        this.tail = newNode;
        this.length += 1;
        return this;
    }
    insertAtIndex(val, index){
        if(index < 0 || index > this.length){
            print("Index is out of range")
            return
        }
    
        if(index === 0){
            this.insertAtBeginning(val)
            return this;
        }

        if(index === this.length){
            this.insertAtEnd(val)
        }
        let newNode = new Node(val)
        let current = this.head;
        for(let i = 1; i < index; i++){
            current = current.next;
        }

        newNode.next = current.next
        current.next.prev = newNode;
        current.next = newNode
        newNode.prev = current;
        this.length += 1;
        return this; 
    }
    get(index){
        if(this.head === null){
            print("This list is empty")
            return;
        }

        if(index === 0){
            return this.head;
        }

        if(index === this.length - 1){
            return this.tail;
        }

        let current = this.head;
        for(let i = 1; i < index + 1; i++){
            current = current.next
        }
        return current;
    }
    getSize(){
        return this.length
    }
    remove(index){
        if(index > this.length || index < 0){
            print("Index is out of range")
            return this;
        }

        if(index === 0){
            this.poll()
            return this;
        }

        if(index === this.length - 1){
            this.pop()
            return this
        }

        let current = this.get(index)
        console.log(current)
        
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length -= 1
        return this;

    }
    pop(){
        //remove from the end and return the node
        if(this.head === null){
            print("List is already empty")
            return this;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            print("this list is empty")
            return this;
        }

        let currentTail = this.tail;
        this.tail = this.tail.prev
        this.tail.next = null;
        currentTail.prev = null;
        this.length -= 1;
        return currentTail;

    }
    poll(){
        if(this.head === null){
            print("List is already empty")
            return this;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            print("this list is empty")
            return this;
        }

        let currentHead = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        currentHead.next = null;
        this.length -= 1;
        return currentHead;
    }
    printList(){
        let list = []
        let current = this.head;
        while(current != null){
            if(current.next == null){
                list.push(current.value)
                current = current.next
            } else {
                list.push(current.value)
                current = current.next
            }
        }
        return list;
    }
}

function print(obj){
    console.log(obj)
}

let doubleLinkedList = new DoublyLinkedList();
doubleLinkedList.insertAtBeginning(21);
doubleLinkedList.insertAtBeginning(43);
doubleLinkedList.insertAtBeginning(500);
doubleLinkedList.insertAtBeginning(412);
doubleLinkedList.insertAtBeginning(32);
doubleLinkedList.insertAtEnd(12)
doubleLinkedList.insertAtEnd(17)
doubleLinkedList.insertAtEnd(9)
doubleLinkedList.insertAtEnd(61)
doubleLinkedList.insertAtEnd(67)
doubleLinkedList.insertAtEnd(7)
doubleLinkedList.insertAtEnd(77)
doubleLinkedList.insertAtEnd(777)
doubleLinkedList.insertAtBeginning(456)
doubleLinkedList.insertAtIndex(3, 1)
let node = doubleLinkedList.remove(13);
let node1 = doubleLinkedList.remove(12);
let node2 = doubleLinkedList.remove(1);
// let node = doubleLinkedList.poll()
// let node2 = doubleLinkedList.pop()
// let node3 = doubleLinkedList.poll()
print(node)
print(node1)
// print("This is the tail : " + doubleLinkedList.tail.value)
// print("This is the head : " + doubleLinkedList.head.value)
let list = doubleLinkedList.printList()
print(list)