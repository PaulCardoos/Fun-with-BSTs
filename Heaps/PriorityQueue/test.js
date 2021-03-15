const PriorityQ = require('./priorityQueue')

let PQ = new PriorityQ()
PQ.enqueue('gunshot wound',55)
PQ.enqueue('common cold', 2)
PQ.enqueue('stabbing', 58)
PQ.enqueue('concussion', 24)
PQ.enqueue('torn ACL', 22)
PQ.enqueue('infant fever', 37)
PQ.enqueue('Woman in labor', 40)
const ele = PQ.dequeue();

console.log(PQ.structure)
console.log(ele)