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

type TraversalResult = [number | null, number, number][];

const traverse = (
	root: TreeNode | null,
	parent: TreeNode | null = null,
	level = 0,
	vals: TraversalResult = [],
): TraversalResult => {
	if (root) {
		vals.push(
			...traverse(root.left, root, level + 1),
			[parent?.val || null, root.val, level],
			...traverse(root.right, root, level + 1),
		);
	}
	return vals;
};

const processTraversalResult = (
	traversalResult: TraversalResult,
): {
	[val: string]: {
		parent: number | null;
		level: number;
	};
} =>
	Object.fromEntries(
		traversalResult.map(([parent, val, level]) => [val, { parent, level }]),
	);

const areCousins = (root: TreeNode | null, x: number, y: number): boolean => {
	const {
		[x]: { level: xLevel, parent: xParent },
		[y]: { level: yLevel, parent: yParent },
	} = processTraversalResult(traverse(root));
	return xLevel === yLevel && xParent !== yParent;
};

// Forgive my grammar pendantry :)
const isCousins = (root: TreeNode | null, x: number, y: number): boolean =>
	areCousins(root, x, y);
