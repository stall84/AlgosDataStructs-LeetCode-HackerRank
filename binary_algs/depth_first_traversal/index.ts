import treeNodeArray from '../basic_binary_tree/index';
import { TreeNode } from '../models/treeNode';

// Starting at the root node. In this case the first element in the array, 'a'. log-out each value as it's traversed depth-first wise

function depthFirstTraversal(root: TreeNode): void {

    let stack = [root]; // Go ahead and push the root onto the stack.

    treeNodeArray.map((ele:any) => console.log(ele))
    while (stack.length > 0) {
        let current = stack.pop();
        if (current && current.val != undefined) console.log(current.val);
        // We want to traverse toward the left whenever possilbe for a DFT .. 
        // But since we're using a stack, we'll need to push any extant right child first onto the stack
        // followed by the left b/c it's a LIFO structure.. 
        if (current?.right != null) stack.push(current.right);
        if (current?.left != null) stack.push(current.left);

    }
}

depthFirstTraversal(treeNodeArray[0])