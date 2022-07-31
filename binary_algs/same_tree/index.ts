import treeNodeArray from '../basic_binary_tree/index';
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
        let val1 = stack1.pop();
        let val2 = stack2.pop();
        if (val1?.val === val2?.val) {
            // Will need to figure out how to compare the two trees concurently in an iterative approach .. Or figure out a recursive strategy
        }
    }

    return false;
}