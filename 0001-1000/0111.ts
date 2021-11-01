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

const minDepth = (root: TreeNode | null): number =>
	root
		? root.left && root.right
			? Math.min(minDepth(root.left), minDepth(root.right)) + 1
			: !root.left
			? minDepth(root.right) + 1
			: !root.right
			? minDepth(root.left) + 1
			: 1
		: 0;
