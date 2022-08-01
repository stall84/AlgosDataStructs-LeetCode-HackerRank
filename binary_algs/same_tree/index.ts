import {Tree1, Tree2, AltTree1} from '../basic_binary_tree/index';
import { TreeNode } from '../models/treeNode';

/**
 * @description Given the roots of two binary trees (node1 and node2), write func to check if they are the same or not.
 *              Two binary trees are considered the same if they are structurally identical, and the nodes have the same value
 *              LeetCode: https://leetcode.com/problems/same-tree/
 */

function isSameTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 == null && node2 == null) return true         // Do some edge-case-checking and/or validation (if desired/required) (empty binary trees are valid trees)

    const stack1 = [node1];
    const stack2 = [node2];

    while (stack1.length > 0) {
        let curr1 = stack1.pop();
        let curr2 = stack2.pop();

        console.log('Tree1 currNode: ', curr1?.val)
        console.log('Tree2 currNode: ', curr2?.val)
        if (curr1?.val === curr2?.val) {
            if (curr1?.right != null) stack1.push(curr1.right)
            if (curr1?.left != null) stack1.push(curr1.left)
            if (curr2?.right != null) stack2.push(curr2.right)
            if (curr2?.left != null) stack2.push(curr2.left)
        } else {
            return false;
        }
        
    }

    return true;
}

console.log('Running first test on (duplicate) Tree1 and Tree2...\n', isSameTree(Tree1[0], Tree2[0]))
console.log('Running second test on (not-same) Tree1 and AltTree1...\n', isSameTree(Tree1[0], AltTree1[0]))