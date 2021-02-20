class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

//to ensure constant insertion and deletion we will keep track of head and tail

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val)

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.size += 1; 
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
        return this; 
    }
    dequeue(){
        if(this.head === null){
            print("The queue is empty")
            return this
        }
        let temp = this.head
        this.head = this.head.next;
        temp.next = null;
        this.size -= 1;
        return temp;
    }
    peek(){
        return this.head === null ? null : this.head
    }
    size(){
        return this.size
    }
    isEmpty(){
        return this.head === null ? true : false
    }
    printList(){
        //for viewing/debugging purposes
        let list = []
        let current = this.head
        while(current != null){
            list.push(current.value)
            current = current.next
        }
        return list
    }
}

function print(obj){
    console.log(obj)
}

let q = new Queue();
q.enqueue(1002)
q.enqueue(154)
q.enqueue(13)
// q.dequeue()
// q.dequeue()
// q.dequeue()
// q.dequeue()
// let empty = q.isEmpty()
// print(empty)
let list = q.printList()
// q.enqueue(112)
// q.enqueue(777)
// q.enqueue(43)
// q.enqueue(12)
// empty = q.isEmpty()
// print(empty)
// print(q.size)
// list = q.printList()
print(list)