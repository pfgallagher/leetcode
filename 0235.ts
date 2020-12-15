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

const lowestCommonAncestor = (
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
): TreeNode | null => {
	if (root && p && q) {
		const { left: rootLeft, right: rootRight, val: rootVal } = root;
		const { val: pVal } = p;
		const { val: qVal } = q;
		if (rootVal < pVal && rootVal < qVal) {
			return lowestCommonAncestor(rootRight, p, q);
		} else if (pVal < rootVal && qVal < rootVal) {
			return lowestCommonAncestor(rootLeft, p, q);
		} else {
			return root;
		}
	} else {
		return root;
	}
};
