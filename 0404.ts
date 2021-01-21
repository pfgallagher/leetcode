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

const sumOfLeftLeaves = (root: TreeNode | null, isLeftNode = false): number =>
	!root
		? 0
		: isLeftNode && !root.left && !root.right
		? root.val
		: sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
