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

const traverse = (root: TreeNode | null, vals: number[] = []): number[] => {
	if (root) {
		vals.push(...traverse(root.left), root.val, ...traverse(root.right));
	}
	return vals;
};

const findMode = (root: TreeNode | null): number[] => {
	const vals = traverse(root);
	const freqMap = new Map<number, number>();
	for (const val of vals) {
		freqMap.set(val, (freqMap.get(val) || 0) + 1);
	}
	const max = Math.max(...freqMap.values());
	return [...freqMap.keys()].filter(key => freqMap.get(key) === max);
};
