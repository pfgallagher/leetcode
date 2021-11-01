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

const buildIncreasingBST = (vals: number[]): TreeNode | null => {
	const first = vals.shift();
	if (first !== undefined) {
		const base = new TreeNode(first);
		let cur = base;
		for (const val of vals) {
			cur.right = new TreeNode(val);
			cur = cur.right;
		}
		return base;
	}
	return null;
};

const increasingBST = (root: TreeNode | null): TreeNode | null =>
	buildIncreasingBST(traverse(root));
