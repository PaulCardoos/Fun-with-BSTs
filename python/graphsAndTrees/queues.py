class MyQueue:
    def __init__(self):
        """
        implement a queue using a list FIFO
        """
        self.queue = []
    
    def size(self):
        """
        returns the size of the queue
        """
        return len(self.queue)
    
    def isEmpty(self):
        """
        returns if the queue is currently empty
        """
        return len(self.queue) == 0
    
    def peek(self):
        """
        take a peek at the first element of the queue
        """
        return self.queue[0]
        
    def enqueue(self, element):
        """
        add an element to the end of the queue
        """
        return self.queue.append(element)
        

    def dequeue(self):
        """
        remove first element from the queue
        """
        return self.queue.pop(0)
