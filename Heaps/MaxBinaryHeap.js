

class MaxBinaryHeap{
    constructor(){
        //we will use an array to model structure of the heap 
        this.structure = [41,39,33,18,27,12]
    }
    insert(value){
        //add to the end of an array and bubble up
        const values = this.structure
        this.structure.push(value)
        let index = this.structure.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        while(values[index] > values[parentIndex]){
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
    extractMax(){
        //this is the reason that it is good for priority Queue
        this.structure = values
        temp = values[0]
        values[0] = values[values.length - 1]
        values[values.length - 1] = temp

        values.pop()
        let index = 0
        while(values[index])
        let rightChildIndex = 2 * index + 2
        let leftChildIndex = 2 * index + 1


        //now heapify

    }

}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(1)
heap.insert(12)
heap.insert(28)
console.log(heap.structure)