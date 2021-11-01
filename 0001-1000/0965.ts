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

const isUnivalTree = (root: TreeNode | null, target = root?.val): boolean =>
	!root ||
	(root.val === target &&
		isUnivalTree(root.left, target) &&
		isUnivalTree(root.right, target));
