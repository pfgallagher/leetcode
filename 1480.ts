// const runningSum = (nums: number[]): number[] => {
// 	const sums: number[] = [];
// 	for (const n of nums) {
// 		sums.push((sums[sums.length - 1] || 0) + n);
// 	}
// 	return sums;
// };

const runningSum = (nums: number[]): number[] => {
	for (let i = 1; i < nums.length; i++) {
		nums[i] = nums[i] + nums[i - 1];
	}
	return nums;
};
