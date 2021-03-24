//Graphs are implement with adjacent list or adjacent matrix

//this is an undirected graph
'use strict'

class Graph{
    constructor(){
        this.adjacency = {}
    }
    addVertex(k){
        //check if key exists 
        if(!this.adjacency[k]) this.adjacency[k] = []
    }
    addEdge(v1, v2){
        //take two args and connects them on a graph
        //if we wanted to make a directed graph, we would only add one way
        this.adjacency[v1].push(v2)
        this.adjacency[v2].push(v1)
    }
    removeEdge(v1, v2){
        this.adjacency[v1] = this.adjacency[v1].filter(v => v !== v2)
        this.adjacency[v2] = this.adjacency[v2].filter(v => v !== v1)
    }
    removeVertex(v){
        while(this.adjacency[v].length){
            const vertex = this.adjacency[v].pop()
            this.removeEdge(v, vertex)
        }
        delete this.adjacency[v]
    }
    DFSrecursive(v){
        //keep track of visited to make progress
        const visited = {}
        const order = []
        const adjList = this.adjacency;
        const dfs = (v) => {
            //base case
            if(!v){
                return null
            }
            //set node as visited
            visited[v] = true
            order.push(v)
            
            //for each neighbor, if not visited dfs
            adjList[v].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
            
        }
        
        dfs(v)
        
        return order
    }
    DFSiterative(vertex){
        //we create our own stack using array
        const stack = [vertex]

        //keep track of visited to make progress
        const order = []
        const visited = {}
        
        visited[vertex] = true
        
        //loop while stack not empty
        while(stack.length !== 0){
            console.log(stack)
            const next = stack.pop()
            order.push(next)
            
            this.adjacency[next].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            });
        }

        return order;
    }
}

/*
g.addVertex("Tom")                                     
g.addVertex("Paul")
g.addVertex("Alan")
g.addVertex("Rafca")
g.addVertex("Mirna")
g.addVertex("Miriam")
g.addVertex("Weldon")
g.addEdge("Paul", "Mirna")
g.addEdge("Tom", "Paul")
g.addEdge("Alan", "Rafca")
g.addEdge("Miriam", "Weldon")
g.addEdge("Miriam", "Rafca")
g.addEdge("Mirna", "Alan")
g.removeVertex("Weldon")
g.removeVertex("Miriam")


*/
var g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

//let order = g.DFSrecursive("A")
let order = g.DFSiterative("A")
console.log(order)