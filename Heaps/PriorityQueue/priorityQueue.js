const pqNode = require('./pqNode')
const utils = require('../utils')

//we will use a maxHeap because elements with the highest priority will be 
//extracted first

module.exports = class PriorityQueue{
    constructor(){
        //we will use an array to model structure of the heap 
        this.structure = [];
    }
    enqueue(value, priority){
        //add to the end of an array and bubble up
        const newNode = new pqNode(value, priority);
        const values = this.structure
        this.structure.push(newNode)
        if(this.structure.length === 1){
            return
        }
        let index = this.structure.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        while(values[index].priority > values[parentIndex].priority){
            //if greater than parent, swap
            let temp;
            temp = values[index]
            values[index] = values[parentIndex]
            values[parentIndex] = temp
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
            if(parentIndex < 0){
                break;
            }
        }
    }
    dequeue(){
        //this is the reason that it is good for priority Queue
        const values = this.structure
        let length = values.length
        utils.swap(values, 0, length - 1)
        const ele = values.pop()
        length--

        console.log(values)
        const element = values[0].priority
        let index = 0
        let leftChild, rightChild, rightChildIdx, leftChildIdx, maxVal
        while(index < length){            
            leftChildIdx = 2 * index + 1 
            rightChildIdx = 2 * index + 2 
            if(rightChildIdx < length){
                rightChild = values[rightChildIdx].priority
            }
            if(leftChildIdx < length){
                leftChild = values[leftChildIdx].priority
                if(leftChild > element){
                    if(rightChildIdx < length){
                        maxVal = utils.getMaxP(values, leftChildIdx, rightChildIdx)
                        utils.swap(values, index, maxVal)
                        index = maxVal
                  
                    } else { 
                        utils.swap(values, index, leftChildIdx)
                        index = leftChildIdx
                        
                    }
                } else if(rightChild && rightChild > element){
                        utils.swap(values, index, rightChildIdx)
                        index = rightChildIdx
             
                    }
                }else {
                    index += 1          

                }
            }
            return ele
        }

    }



// let heap = new MaxBinaryHeap()
// heap.insert(55)
// heap.insert(1)
// heap.insert(12)
// heap.insert(28)
// heap.extractMax()
// heap.extractMax()
// console.log(heap.structure)