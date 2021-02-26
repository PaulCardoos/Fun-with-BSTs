const TreeNode = require("./TreeNode.js")
const BST = require("./tree.js")


var tree = new BST();
tree.root = new TreeNode(20);
tree.root.left = new TreeNode(15);
tree.root.right = new TreeNode(30);
tree.insert(new TreeNode(45))
tree.insert(new TreeNode(29))
tree.insert(new TreeNode(5));
console.log(tree);


const preOrderDFS = (tree) => {
    let data = []
    let current = tree.root;
    preOrderHelper(current, data)
    return data
}

const postOrderDFS = (tree) => {
    let data = []
    let current = tree.root;
    postOrderHelper(current, data);
    return data;
}

const preOrderHelper = (node, data) => {
    if(node === null) return;
    data.push(node.value)
    if(node.left) preOrderHelper(node.left, data)
    if(node.right) preOrderHelper(node.right, data)  
}

const postOrderHelper = (node, data) => {
    if(node === null) return;
    if(node.left) postOrderHelper(node.left, data)
    if(node.right) postOrderHelper(node.right, data)
    data.push(node.value)
} 

const pre = preOrderDFS(tree)
const post = postOrderDFS(tree)
console.log(pre)
console.log(post)




//let bfs_order = []
// let found = tree.find(45);
// let found1 = tree.find(30);
// let found2 = tree.find(15);
// let found3 = tree.find(20);
// let found4 = tree.find(44);
// let found5 = tree.find(30);
//bfs_order = tree.bfs()
// console.log(found);
// console.log(found1);
// console.log(found2);
// console.log(found3);
// console.log(found4);
//console.log(bfs_order)