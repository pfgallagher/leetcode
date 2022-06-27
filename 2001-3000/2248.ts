export {};

const intersection = (nums: number[][]): number[] =>
	nums[0].filter(n => nums.every(arr => arr.includes(n))).sort((a, b) => a - b);
