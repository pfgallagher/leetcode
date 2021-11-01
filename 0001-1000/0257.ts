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

const binaryTreePaths = (root: TreeNode | null): string[] => {
	const paths: number[][] = [];
	const search = (searchRoot: TreeNode | null, path: number[]) => {
		if (!searchRoot) {
			return;
		}
		if (!searchRoot.left && !searchRoot.right) {
			path.push(searchRoot.val);
			paths.push(path);
		}
		search(searchRoot.left, [...path, searchRoot.val]);
		search(searchRoot.right, [...path, searchRoot.val]);
	};
	search(root, []);
	return paths.map(path => path.join("->"));
};
