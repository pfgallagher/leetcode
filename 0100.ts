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

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean =>
	!p && !q
		? true
		: !p || !q || p.val !== q.val
		? false
		: isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
