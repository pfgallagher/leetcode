export {};

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean =>
	!t1 && !t2
		? true
		: !t1 || !t2
		? false
		: t1.val === t2.val &&
		  isMirror(t1.right, t2.left) &&
		  isMirror(t1.left, t2.right);

const isSymmetric = (root: TreeNode | null) => isMirror(root, root);
