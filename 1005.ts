const largestSumAfterKNegations = (nums: number[], k: number): number => {
	for (let i = 0; i < k; i++) {
		nums.sort((a, b) => a - b);
		const largestNegativeI = nums.findIndex(num => num < 0);
		if (0 <= largestNegativeI) {
			nums[largestNegativeI] = -nums[largestNegativeI];
		} else {
			nums[0] = -nums[0];
		}
	}
	return nums.reduce((a, c) => a + c, 0);
};
