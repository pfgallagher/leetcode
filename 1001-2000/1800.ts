const maxAscendingSum = (nums: number[]): number => {
	let max = -Infinity;
	let cur = 0;
	nums.forEach((n, i) => {
		if (n <= (nums[i - 1] ?? -Infinity)) {
			cur = 0;
		}
		cur += n;
		max = Math.max(max, cur);
	});
	return max;
};
