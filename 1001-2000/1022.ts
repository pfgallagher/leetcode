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

const getPaths = (
	root: TreeNode | null,
	curPath: number[] = [],
	paths: number[][] = [],
): number[][] => {
	if (root) {
		curPath.push(root.val);
		if (!root.left && !root.right) {
			paths.push([...curPath]);
		} else {
			getPaths(root.left, curPath, paths);
			getPaths(root.right, curPath, paths);
		}
		curPath.pop();
	}
	return paths;
};

const sumRootToLeaf = (root: TreeNode | null): number =>
	getPaths(root)
		.map(path => parseInt(path.join(""), 2))
		.reduce((a, c) => a + c, 0);
