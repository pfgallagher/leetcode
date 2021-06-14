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

const getLeaves = (root: TreeNode | null): number[] => {
	const leaves: number[] = [];
	if (root) {
		if (!root.left && !root.right) {
			leaves.push(root.val);
		}
		if (root.left) {
			leaves.push(...getLeaves(root.left));
		}
		if (root.right) {
			leaves.push(...getLeaves(root.right));
		}
	}
	return leaves;
};

const leafSimilar = (root1: TreeNode | null, root2: TreeNode | null): boolean =>
	getLeaves(root1).toString() === getLeaves(root2).toString();
