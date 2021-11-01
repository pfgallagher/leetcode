const findMaxAverage = (nums: number[], k: number): number => {
	let sum = nums.slice(0, k).reduce((a, c) => a + c, 0);
	let maxSum = sum;
	for (let i = k; i < nums.length; i++) {
		sum += nums[i] - nums[i - k];
		maxSum = Math.max(maxSum, sum);
	}
	return maxSum / k;
};
