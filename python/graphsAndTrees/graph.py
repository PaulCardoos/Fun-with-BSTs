class Graph:
    """
    an implementation of a directed graph
    """ 
    def __init__(self, adjaceny):
        """
        adjaceny -> dictionary with a list as value
        """ 
        self.adjaceny = adjaceny
    def add_vertex(self, node):
        """
        node -> Node 
        """ 
        if node not in self.adjaceny.keys():
            self.adjaceny[node] = []
        else:
            self.adjaceny
