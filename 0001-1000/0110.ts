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

const treeHeight = (root: TreeNode | null): number =>
	root ? 1 + Math.max(treeHeight(root.left), treeHeight(root.right)) : 0;

const isBalanced = (root: TreeNode | null): boolean =>
	root
		? Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1 &&
		  isBalanced(root.left) &&
		  isBalanced(root.right)
		: true;
