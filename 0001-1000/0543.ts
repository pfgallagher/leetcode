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

const diameterOfBinaryTree = (root: TreeNode | null): number => {
	let diameter = 1;
	const search = (innerRoot: TreeNode | null): number => {
		if (innerRoot) {
			const l = search(innerRoot.left);
			const r = search(innerRoot.right);
			diameter = Math.max(diameter, l + r + 1);
			return Math.max(l, r) + 1;
		} else {
			return 0;
		}
	};
	search(root);
	return diameter - 1;
};
