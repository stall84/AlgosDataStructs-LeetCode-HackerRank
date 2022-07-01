import { TreeNode } from '../models/treeNode';

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

a.right = b;
b.left = c;


function inorderTraversal(root: TreeNode | null): number[] {
 
    if (root === null) return [];
    const traversed = [];
    const stack = [root];
    while (stack.length > 0) {
        let current = stack.pop();
            traversed.push(current!.val);
            if (current?.left) stack.push(current?.left);
            if (current?.right) stack.push(current?.right);
        
    }
    return traversed;
};


console.log(inorderTraversal(a));
