const smallestRangeI = (nums: number[], k: number): number => {
	nums.sort((a, b) => a - b);
	return Math.max(nums[nums.length - 1] - nums[0] - 2 * k, 0);
};
