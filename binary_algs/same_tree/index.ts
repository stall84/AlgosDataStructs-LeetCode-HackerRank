import {Tree1, Tree2, AltTree1, AltTree2} from '../basic_binary_tree/index';
import { TreeNode } from '../models/treeNode';

/**
 * @description Given the roots of two binary trees (node1 and node2), write func to check if they are the same or not.
 *              Two binary trees are considered the same if they are structurally identical, and the nodes have the same value
 *              LeetCode: https://leetcode.com/problems/same-tree/
 */

function isSameTree(node1: TreeNode | null | undefined, node2: TreeNode | null | undefined): boolean {
    if (node1 == null && node2 == null) return true         // Do some edge-case-checking and/or validation (if desired/required) (empty binary trees are valid trees)

    const stack1 = [node1];
    const stack2 = [node2];

    while (stack1.length > 0) {
        let curr1 = stack1.pop();
        let curr2 = stack2.pop();

        // if (curr1 == null || curr2 == null) return false;

        // console.log('Tree1 currNode: ', curr1)
        // console.log('--curr1.val: ', curr1?.val)
        // console.log('--curr1.left: ', curr1?.left)
        // console.log('--curr1.right: ', curr1?.right)
        // console.log('Tree2 currNode: ', curr2)
        // console.log('--curr2.val: ', curr2?.val)
        // console.log('--curr2.left: ', curr2?.left)
        // console.log('--curr2.right: ', curr2?.right)
        if (!curr1 && !curr2) {
            continue
        }
        if (!curr1 && curr2 != null) return false;
        if (!curr2 && curr1 != null) return false;
        if (curr1!.val === curr2!.val) {
            stack1.push(curr1!.right)
            stack1.push(curr1!.left)
            stack2.push(curr2!.right)
            stack2.push(curr2!.left)
        } else {
            return false;
        }
        
    }

    return true;
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

a.left = b;
a.right = null;

const smallTree = [a, b]

const d = new TreeNode(1);
const e = null
const f = new TreeNode(2);

d.left = e;
d.right = f;

const badTree = [d, e, f]

// console.log('Running first test on (duplicate) Tree1 and Tree2...\n', isSameTree(Tree1[0], Tree2[0]))
console.log('Running second test on (not-same) Tree1 and AltTree1...\n', isSameTree(smallTree[0], badTree[0]))
// console.log('Running third test on (not-same) Tree1 and AltTree2...\n', isSameTree(Tree1[0], AltTree2[0]))