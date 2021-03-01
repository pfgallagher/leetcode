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

const getMinimumDifference = (root: TreeNode | null): number => {
	const vals = traverse(root);
	return Math.min(
		...vals.map((val, i, arr) => arr[i + 1] - val).filter(val => val),
	);
};
