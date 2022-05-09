const maxSubsequence = (nums: number[], k: number): number[] => {
	while (nums.length !== k) {
		nums.splice(nums.indexOf(Math.min(...nums)), 1);
	}
	return nums;
};
