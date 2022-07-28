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

const evaluateTree = (root: TreeNode | null): boolean =>
	!root?.left && !root?.right
		? !!root?.val
		: root?.val === 2
		? evaluateTree(root.left) || evaluateTree(root.right)
		: evaluateTree(root.left) && evaluateTree(root.right);
