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

const levelOrderBottom = (
	root: TreeNode | null,
	arr: number[][] = [],
	level = 0,
): number[][] => {
	if (root) {
		(arr[level] || (arr[level] = [])).push(root.val);
		levelOrderBottom(root.left, arr, level + 1);
		levelOrderBottom(root.right, arr, level + 1);
	}
	return level ? arr : arr.reverse();
};
