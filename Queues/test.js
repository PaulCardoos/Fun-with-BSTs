/* testing queue Using Stacks */

let MyQueue = require("./queueUsingStacks.js")

let q = new MyQueue();
q.add(10)
q.add(13)
q.add(17)
q.add(13)
q.add(90)
let Q = q.printQueue()
console.log(Q)
q.remove()
console.log(q.peek())
console.log(q.isEmpty())
q.remove()
q.remove()
q.remove()
q.remove()
console.log(q.isEmpty())


Q = q.printQueue()
console.log(Q)