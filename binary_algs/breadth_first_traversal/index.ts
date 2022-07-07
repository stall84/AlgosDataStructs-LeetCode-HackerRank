import treeNodeArray from '../basic_binary_tree/index';
import { TreeNode } from '../models/treeNode';


function iterativeBreadthFirstTraversal(root: TreeNode): TreeNode[] {
    if (root === null) return []; // Guard against (valid) empty tree

    const returnArr = [];
    const queue = [root];
    
    while (queue.length > 0) {
        let current = queue.shift();
        console.log('current: ', current?.val);
        returnArr.push(current?.val);
        if (current?.left != null) queue.push(current.left);
        if (current?.right != null) queue.push(current.right);
    }
    return returnArr;
}

console.log('answer array : ', iterativeBreadthFirstTraversal(treeNodeArray[0]))