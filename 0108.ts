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

const sortedArrayToBST = (
	nums: number[],
	start = 0,
	end = nums.length - 1,
): TreeNode | null => {
	if (end < start) {
		return null;
	}
	const midI = Math.floor((start + end) / 2);
	return new TreeNode(
		nums[midI],
		sortedArrayToBST(nums, start, midI - 1),
		sortedArrayToBST(nums, midI + 1, end),
	);
};
