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

const minDiff = (nums: number[]): number => {
	const sorted = nums.filter(n => typeof n === "number").sort((a, b) => a - b);
	let curMinDiff = Infinity;
	for (const [i, n] of sorted.entries()) {
		const next = sorted[i + 1];
		if (next !== undefined) {
			curMinDiff = Math.min(curMinDiff, next - n);
		}
	}
	return curMinDiff;
};

const traverse = (root: TreeNode | null, vals: number[] = []): number[] => {
	if (root) {
		vals.push(...traverse(root.left), root.val, ...traverse(root.right));
	}
	return vals;
};

const minDiffInBST = (root: TreeNode | null): number => minDiff(traverse(root));
