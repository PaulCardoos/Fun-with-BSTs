from queues import MyQueue

class Graph:
    """
    an implementation of a directed graph
    """ 
    def __init__(self, adjaceny={}):
        """
        adjaceny -> dictionary with a list as value
        """ 
        self.adjaceny = adjaceny

    def add_vertex(self, node):
        """
        node -> can be of any type
        """ 
        if node not in self.adjaceny.keys():
            self.adjaceny[node] = []
        else: 
            return "vertex already exists"
        
    def add_edges(self, v1, v2):
        """
        adding edges only one way since this is a directed graph
        """
        if v1 in self.adjaceny.keys():
            return self.adjaceny[v1].append(v2)

        self.adjaceny[v1] = v2
        return
    
    def routeBetweenNodes(self, start, end):
        """
        Given a directed graph, design an algorithm to find out whether there is a
        route between two nodes. 

        Cracking the coding interview pg 109 4.1

        bfs implementation using a queue

        params: starting node -> character
                ending node -> character

        we want to see if there is a route between the two nodes
        
        [A]
        
        """
        q = MyQueue()
        q.enqueue(start)
        order = []

        #keep track of nodes visited
        visited = {}
        visited[start] = True
        
        

        while(q.size() != 0):
            #dequeue first element and add neighboring nodes
            leading = q.dequeue()
            order.append(leading)
            nextNodes = self.adjaceny[leading]
            for i in nextNodes: 
                visited[i] = True
                q.enqueue(i)
                if(i == end):
                    print(order)
                    return True
        print(order)
        return False
            

if __name__ == "__main__":
    g = Graph()
    g.add_vertex("A")
    g.add_vertex("B")
    g.add_vertex("C")
    g.add_vertex("D")
    g.add_vertex("E")
    g.add_vertex("F")
    g.add_vertex("G")
    g.add_edges("A","B")
    g.add_edges("B","C")
    g.add_edges("B","E")
    g.add_edges("C","F")
    g.add_edges("F","G")
    g.add_edges("G","E")
    g.add_edges("A","D")
    g.add_edges("E","D")
    print(g.routeBetweenNodes("A", "E"))

    #print(g.adjaceny)



'''
A -> B, D
B -> E, C
C -> F
D
E -> D
F -> G
G -> E
'''