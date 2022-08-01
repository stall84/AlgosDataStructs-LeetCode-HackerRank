import { TreeNode } from '../models/treeNode';

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

const a1 = new TreeNode('a');
const b1 = new TreeNode('b');
const c1 = new TreeNode('c');
const d1 = new TreeNode('d');
const e1 = new TreeNode('e');
const f1 = new TreeNode('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

a1.left = b1;
a1.right = c1;
b1.left = null;
b1.right = e1;
c1.left = f1;

export const Tree1 = [a, b, c, d, e, f];
export const Tree2 = [a, b, c, d, e, f];
export const AltTree1 = [a1, b1, c1, d1, e1, f1];