import {Tree1, Tree2} from '../basic_binary_tree/index';
import { TreeNode } from '../models/treeNode';

// Starting at the root node. In this case the first element in the array, 'a'. log-out each value as it's traversed depth-first wise

function iterativeDFT(root: TreeNode): void {

    // check for an empty tree case which is a valid tree
    if (root === null) return;
    const stack = [root]; // Go ahead and push the root onto the stack.

    Tree1.map((ele:any) => console.log(ele))
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

// iterativeDFT(treeNodeArray[0])

function recursiveDFT(root: TreeNode): void {
    const current = root;
    if (current === null) return;      // Remember an empty tree IS a valid binary tree.
    console.log(current.val);
    if (current.left != null) recursiveDFT(current.left);
    if (current.right != null) recursiveDFT(current.right);

}

recursiveDFT(Tree1[0])