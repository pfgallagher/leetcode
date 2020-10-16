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

const hasPathSum = (
	root: TreeNode | null,
	sum: number,
	subSum: number = 0,
): boolean =>
	root
		? subSum + root.val === sum && !root.left && !root.right
			? true
			: hasPathSum(root.left, sum, subSum + root.val) ||
			  hasPathSum(root.right, sum, subSum + root.val)
			? true
			: false
		: false;
