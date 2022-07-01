export class TreeNode {
    val: any;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(val?: any, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}