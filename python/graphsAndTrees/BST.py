"""
Given a sorted (increasing order) array with unique integer elements, 
write an algorithm to create a binary search tree with minimal height
"""

class TreeNode:
    def __init__(self, val):
        self.val = val 
        self.left = None
        self.right = None

class BST: 
    def __init__(self, arr):
        """
        takes in a sorted array
        """
        self.arr = arr
        self.root = None
    
    def insert(self, element : TreeNode):
        """
        insert an element into the BST

        element should be of type TreeNode
        """
        def insertNode(root, element):
            if root == None:
                newNode = TreeNode(element)
                root = newNode 
            elif element < root.val:
                if(root.left != None):
                    insertNode(root.left, element)
                else:
                    newNode = TreeNode(element)
                    root.left = newNode
            else:
                if(root.right != None):
                    insertNode(root.right, element)
                else:
                    newNode = TreeNode(element)
                    root.right = newNode

        if self.root == None: 
            newNode = TreeNode(element)
            self.root = newNode
        else: 
            insertNode(self.root, element)
            
    def printTree(self):

        def printTreeHelper(root):
            if root == None:
                return

            printTreeHelper(root.left)
            print(root.val)
            printTreeHelper(root.right)
        
        printTreeHelper(self.root)
    
    def buildMinTree(self):
        """
        Given a sorted (increasing order) array with unique integer elements, write an algorithm
         to create a binary search tree with minimal height.
        """

        def build(arr): 
            middle = (len(arr) // 2)
            
            if middle <= 0: 
                self.insert(arr[middle])
                return
            else:
                self.insert(arr[middle])
                build(arr[middle + 1: len(arr) - 1])
                print("top part: " ,arr)
                build(arr[0:middle - 1])        
                print("bottom part: " ,arr)
        
        build(self.arr)


        

        
        
if __name__ == "__main__":
    bst = BST([1,2,3,4,5,6,7])
    bst.buildMinTree()
    bst.printTree()