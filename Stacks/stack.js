let Node = require("./Node.js")


//stack implemented with a singly linked list
module.exports = class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }
    push(val){

        //for constant insertion/deletion time insert at beginning of the list
        let newNode = new Node(val);
        
        if(this.top === null){
            this.top = newNode
            this.size += 1 
            return this
        }

        newNode.next = this.top
        this.top = newNode
        this.size += 1
        return this
    }
    pop(){
        if(this.top === null){
            print("This stack is already empty")
            return
        }
        let temp = this.top
        this.top = this.top.next
        this.size -= 1
        temp.next = null
        return temp
    }
    size(){
        return this.size
    }
    isEmpty(){
        return this.size === 0 ? true : false
    }
    printList(){
        //for viewing/debugging purposes
        let list = []
        let current = this.top
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

// let stack = new Stack();
// stack.push(2)
// stack.push(13)
// stack.push(89)
// stack.push(91)
// let list = stack.printList()
// print(list)
// // let x = stack.pop()
// // let y = stack.pop()
// // let z = stack.pop()
// // let empty = stack.isEmpty()
// // print("is stack empty: " + empty)
// // let n = stack.pop()
// // empty = stack.isEmpty()
// // print("is stack empty: " + empty)
// // list = stack.printList()
// // print(list)