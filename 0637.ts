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

const bfs = (root: TreeNode | null): number[][] => {
	const valsByLevel: number[][] = [];
	const queue = [root];
	let level = 0;
	while (queue.length) {
		let numNodesInLevel = queue.length;
		while (numNodesInLevel) {
			const next = queue.pop();
			if (next) {
				const { left, right, val } = next;
				if (!valsByLevel[level]) {
					valsByLevel.push([]);
				}
				valsByLevel[level].unshift(val);
				if (left) {
					queue.unshift(left);
				}
				if (right) {
					queue.unshift(right);
				}
				numNodesInLevel--;
			}
		}
		level++;
	}
	return valsByLevel;
};

const averageOfLevels = (root: TreeNode | null): number[] =>
	bfs(root).map(level => level.reduce((a, c) => a + c, 0) / level.length);
