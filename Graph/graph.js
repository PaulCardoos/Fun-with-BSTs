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
}

/*
Graph {
    adjacency: {
      Tom: [ 'Paul' ],
      Paul: [ 'Mirna', 'Tom' ],
      Alan: [ 'Rafca', 'Mirna' ],
      Rafca: [ 'Alan', 'Miriam' ],
      Mirna: [ 'Paul', 'Alan' ],
      Miriam: [ 'Weldon', 'Rafca' ],
      Weldon: [ 'Miriam' ]
    }
  }
*/


var g = new Graph()
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

console.log(g)