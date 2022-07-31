import treeNodeArray from '../basic_binary_tree/index';
import { TreeNode } from '../models/treeNode';

/**
 * @description Given a target value (node).. Return true or false if it's in the binary tree.
 */

// Let's start with a Breadth First Traversal 

function treeIncludes(target: string, root: TreeNode): boolean {
    // You could null check, etc up here
    const queue = [root];                     // Go ahead and initialize the queue with the root
    while (queue.length > 0){
        let dequeued = queue.shift();
        console.log('dequeued: ', dequeued?.val)
        if ( dequeued?.val === target ) return true;
        else {
            if (dequeued?.left != null) queue.push(dequeued?.left)          // Take advantage of JS coercion to check for both potential null AND undefined values (since null will 'cover' cases of undefined)
            if (dequeued?.right != null) queue.push(dequeued?.right)
        }
    }

    return false;

}

console.log(treeIncludes('q', treeNodeArray[0]))            // FALSE
console.log(treeIncludes('c', treeNodeArray[0]))            // TRUE