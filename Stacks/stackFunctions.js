let Stack = require("./stack.js")
let Node = require("./Node.js")

class NodeMin extends Node{
    constructor(val){
        super(val)
        this.minOfSubstack = Infinity
    }
}



/* design a stack where in addition push and pop has a minimum function
that returns the min in O(1) time */ 

class StackMin extends Stack{
    constructor(){
        super()
        this.min = Infinity
    }

    newPush(val){
        let newNode = new NodeMin(val);
        newNode.minOfSubstack = this.min
        if(newNode.value < this.min){
            this.min = newNode.value
        }

        if(this.top === null){
            this.top = newNode;
            return this;
        }

        newNode.next = this.top
        this.top = newNode;
        this.size += 1
        return this;
    }

    newPop(){
        let temp;
        if(this.top === null){
            console.log("This stack is already empty")
            return this;
        }
        temp = this.top
        this.min = this.top.minOfSubstack
        this.top = this.top.next
        temp.next = null
        this.size -= 1
        return temp
    }
    getMin(){
        return this.min === Infinity ? console.log("Stack is empty") : this.min
    }

}

let stack = new StackMin();

stack.newPush(7)
stack.newPush(9)
stack.newPush(3)
console.log(stack.min)
stack.newPop()
console.log(stack.min)
stack.newPop()
stack.newPop()
stack.getMin()

let list = stack.printList()
console.log(list)