export class TreeNode {
    val: any;
    left: TreeNode | null | undefined = null;
    right: TreeNode | null | undefined = null;

    constructor(val?: any, left?: TreeNode | null | undefined, right?: TreeNode | null | undefined) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}