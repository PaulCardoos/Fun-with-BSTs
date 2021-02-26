/* Simple, implementation of a BST to practice BFS and DFS*/

class BST {
    constructor(){
        this.root = null; 
    }                                                                                                                           
    insert(node){
        if(this.root == null){
            this.root = node;
        }
        let current = this.root;
        while(true){
            if(node.value > current.value){
                if(current.right !== null){
                    current = current.right;
                } else {
                    current.right = node;
                    return this;
                }
            }

            if(node.value < current.value){
                if(current.left !== null){
                    current = current.left;
                } else {
                    current.left = node;
                    return this;
                }
            }
        }
    }
    find(val){
        if(this.root == null){
            console.log("the tree is empty")
            return null;
        }
        let current = this.root;
        if(current.value == this.root.val){
            return current;
        } 
        while(true){
         
            if(val > current.value){
                if(current.right == null){
                    console.log("this value does not exist")
                    return null;
                } else {
                    current = current.right;
                }
            }
            if(val < current.value){
                if(current.left == null){
                    console.log("this value does not exist")
                    return null;
                } else {
                    current = current.left;
                }
            }
            if(val == current.value){
                return current
            }
        }
    }
    bfs(){
        let q = []
        let visited = []
        let currentNode;
        q.push(this.root);
        while(q.length > 0){
            currentNode = q.shift();
            visited.push(currentNode)
            if(currentNode.left){
                q.push(currentNode.left)
            }
            if(currentNode.right){
                q.push(currentNode.right)
            }
        }
        return visited
    }
}

module.exports = BST;