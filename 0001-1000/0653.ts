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

const traverse = (root: TreeNode | null): number[] =>
	root ? [...traverse(root.left), root.val, ...traverse(root.right)] : [];

const findTarget = (root: TreeNode | null, k: number): boolean => {
	const vals = traverse(root);
	let start = 0;
	let end = vals.length - 1;
	while (start !== end) {
		const sum = vals[start] + vals[end];
		if (sum < k) {
			start++;
		} else if (k < sum) {
			end--;
		} else {
			return true;
		}
	}
	return false;
};
