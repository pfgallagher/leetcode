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

const traverse = (root: TreeNode | null, vals: number[] = []): number[] => {
	if (root) {
		vals.push(...traverse(root.left), root.val, ...traverse(root.right));
	}
	return vals;
};

const rangeSumBST = (
	root: TreeNode | null,
	low: number,
	high: number,
): number =>
	traverse(root)
		.filter(n => low <= n && n <= high)
		.reduce((a, c) => a + c, 0);
