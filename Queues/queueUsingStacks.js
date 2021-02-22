let Stack = require("../Stacks/stack.js")

/* Queue via Stacks: Implement a MyQueue class which implements a 
queue using two stacks from Cracking the coding interview Problem 3.4*/

module.exports = class MyQueue{
    constructor(){
        this.left = new Stack();
        this.right = new Stack();
        this.size = 0
    }
    add(item){
        this.left.push(item)
        this.size++;
        return this;
    }
    remove(){

        if(this.left === null){
            console.log("The stack is already empty")
            return this;
        }
        
        while(this.left.top.next != null){
            this.right.push(this.left.top.value)
            this.left.top = this.left.top.next
        }

        this.left.top = null;
        this.size--;

        while(this.right.top !== null){
            this.left.push(this.right.top.value)
            this.right.top = this.right.top.next
        }

        return this
   
    }
    peek(){
        return this.left.top === null ? console.log("the stack is empty") : this.left.top.value
    }
    isEmpty(){
        return this.size === 0 ? true : false
    }
    printQueue(){
        let list = []
        let current = this.left.top
        while(current != null){
            list.push(current.value)
            current = current.next
        }
        return list
    }
}
