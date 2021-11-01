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

const findSecondMinimumValue = (root: TreeNode | null): number => {
	const [secondMin = -1] = [
		...new Set(traverse(root).sort((a, b) => a - b)),
	].slice(1);
	return secondMin;
};
