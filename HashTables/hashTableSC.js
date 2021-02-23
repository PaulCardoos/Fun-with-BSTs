/* this is an implementation of a hashTable that uses separate chaining
for collisions */ 

const hash = require("./hashFunction.js")


class HashTable { 
    constructor(length){
        this.map = new Array(length)
        this.size = length
    }
    set(key, val){ 

        let index = hash(key, this.size)
        console.log(index)
        if(this.map[index]){
            for(let i of this.map[index]){
                if(i[0] === key){
                    i[1] = val
                    console.log("Value was updated")
                    return
                }
            }
            this.map[index].push([key, val])
            return this
        } 
        this.map[index] = []
        this.map[index].push([key, val])
        return this
    }
    get(key){
    
        let index = hash(key, this.size)
        if(this.map[index]){
            for(let i of this.map[index]){
                if(i[0] === key){
                    return i[1]
                }
            }
        }
        return undefined
    }
    getKeys(){
        let keys = []
        for(let i = 0; i < this.size; i++){
            if(this.map[i]){
                for(let j of this.map[i]){
                    keys.push(j[0])
                }
            }
        }
        return keys
    }
    getValues(){
        let values = []
        for(let i = 0; i < this.size; i++){
            if(this.map[i]){
                for(let j of this.map[i]){
                    if(!values.includes(j[1]))
                    values.push(j[1])
                }
            }
        }
        return values
    }
}

let hashTable = new HashTable(11)
hashTable.set("Tom Brady", "goat")
hashTable.set("Tom Brady", "is the goat")
hashTable.set("SickBoy", "Im from the east side of america")
hashTable.set("Nav", "I got a price on my head")
let value = hashTable.get("Tom Brady")
let value1 = hashTable.get("SickBoy")
let value2 = hashTable.get("Nav")

let keys = hashTable.getKeys()
let values = hashTable.getValues()

console.log(value)
console.log(value1)
console.log(value2)
console.log(keys)
console.log(values)
