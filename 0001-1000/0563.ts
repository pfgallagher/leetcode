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

const findTilt = (root: TreeNode | null): number => {
	let tilt = 0;
	const traverse = (innerRoot: TreeNode | null): number => {
		if (!innerRoot) {
			return 0;
		}
		const l = traverse(innerRoot.left);
		const r = traverse(innerRoot.right);
		tilt += Math.abs(l - r);
		return innerRoot.val + l + r;
	};
	traverse(root);
	return tilt;
};
