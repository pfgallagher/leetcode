const missingNumber = (nums: number[]): number =>
	(nums.length * (nums.length + 1)) / 2 - nums.reduce((a, c) => a + c, 0);
