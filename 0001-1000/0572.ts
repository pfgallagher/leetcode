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

const isEqual = (s: TreeNode | null, t: TreeNode | null): boolean => {
	if (!s && !t) {
		return true;
	}
	if (!s || !t) {
		return false;
	}
	return (
		s.val === t.val && isEqual(s.left, t.left) && isEqual(s.right, t.right)
	);
};

const isSubtree = (s: TreeNode | null, t: TreeNode | null): boolean => {
	if (!s) {
		return false;
	}
	return isEqual(s, t) || isSubtree(s.right, t) || isSubtree(s.left, t);
};
