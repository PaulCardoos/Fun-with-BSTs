class Node{
    constructor(value){
        this.value = value; 
        this.left = null;
        this.right = null;
    }
}

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

var tree = new BST();
tree.root = new Node(20);
tree.root.left = new Node(15);
tree.root.right = new Node(30);
tree.insert(new Node(45))
tree.insert(new Node(29))
tree.insert(new Node(5));
console.log(tree);
let bfs_order = []
// let found = tree.find(45);
// let found1 = tree.find(30);
// let found2 = tree.find(15);
// let found3 = tree.find(20);
// let found4 = tree.find(44);
// let found5 = tree.find(30);
bfs_order = tree.bfs()
// console.log(found);
// console.log(found1);
// console.log(found2);
// console.log(found3);
// console.log(found4);
console.log(bfs_order)