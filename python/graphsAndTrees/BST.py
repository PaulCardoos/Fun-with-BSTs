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
                root = element 
            elif element.val < root.val:
                if(root.left != None):
                    insertNode(root.left, element)
                else:
                    root.left = element
            else:
                if(root.right != None):
                    insertNode(root.right, element)
                else:
                    root.right = element

        if self.root == None: 
            self.root = element
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
    
    def allPossiblePaths(self):
        
        

        
        
if __name__ == "__main__":
    bst = BST([1,2,3])
    x = TreeNode(2)
    y = TreeNode(1)
    z = TreeNode(3)
    bst.insert(x)
    bst.insert(y)
    bst.insert(z)
    bst.printTree()