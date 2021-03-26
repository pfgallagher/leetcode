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

const tree2str = (t: TreeNode | null): string =>
	!t
		? ""
		: !t.left && !t.right
		? `${t.val}`
		: !t.right
		? `${t.val}(${tree2str(t.left)})`
		: `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`;
