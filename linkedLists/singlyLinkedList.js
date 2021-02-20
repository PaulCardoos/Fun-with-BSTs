class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0; 
    }
    getNode(index){
        if(index < 0 || index > this.length - 1){
            print("the index is out of range");
            return null;
        }
        let count = 0; 
        let current = this.head
        while(count != index){
            current = current.next;
            count += 1;
        }

        return current;

    }
    insertAtEnd(val){
        let newNode = new Node(val)
        if(this.head === null){
            this.head = newNode
            this.length+=1;
            return this;
        }

        let current = this.head;

        while(current.next != null){
            current = current.next;
        }

        current.next = newNode;
        this.length+=1;
        return this;

    }
    insertAtBeginning(val){
        let newNode = new Node(val);

        if(this.head === null){
            this.head = newNode; 
            this.length += 1; 
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this;
    }
    insertAtIndex(val, index){
        if(index < 0 || index > this.length){
            print("Index is out of range")
            return this; 
        }
        if(index === 0){
            this.insertAtBeginning(val);
            return this;
        }
        if(index === this.length){
            this.insertAtEnd(val);
            return this;
        }

        let newNode = new Node(val);
        let current = this.head;

        for(let i = 1; i < index; i++){
            current = current.next
        }  

        newNode.next = current.next;
        current.next = newNode;
        this.length += 1;
        return this;
    }
    remove(val){
        if(this.head === null){
            print("Linked List is empty!")
            return;
        }
        
        if(this.head.value === val){
            this.head = this.head.next
            this.length -= 1; 
            return;
        }
        let temp = this.head;
        while(temp.next != null){    

            if(temp.next.value === val){
                temp.next = temp.next.next
                return;
            }

            temp = temp.next;
        }

        return;
    }
    reverse(){
        let current = this.head;
        let prev = null                                    
        let temp;

        while(current){
            temp = current.next;
            current.next = prev;
            prev = current;
            current = temp
        } 

        this.head = prev
        return this;
    }
    printList(){
        while(this.head != null){

            if(this.head.next === null){
                print(this.head.value)
                this.head = this.head.next;

            } else {
                print(this.head.value + " - ")
                this.head = this.head.next;
            }
        }
        return;
    }
}

function print(obj){
    return console.log(obj)
}

let linkedList = new LinkedList();
linkedList.insertAtEnd(15);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(25);
linkedList.insertAtIndex(49, 3)
let n = linkedList.getNode(4);
if(n){
    print("This is the node from getNode : " + n.value);
}
// linkedList.remove(15);
// linkedList.remove(25);
// linkedList.insertAtBeginning(15);
// linkedList.insertAtBeginning(20);
// linkedList.insertAtBeginning(25);
// linkedList.remove(25);
linkedList.reverse()
linkedList.printList()
