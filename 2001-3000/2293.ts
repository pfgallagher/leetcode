const minMaxGame = (nums: number[]): number => {
	while (1 < nums.length) {
		nums = nums
			.slice(nums.length / 2)
			.map((_, i) =>
				!(i % 2)
					? Math.min(nums[2 * i], nums[2 * i + 1])
					: Math.max(nums[2 * i], nums[2 * i + 1]),
			);
	}
	return nums[0];
};
