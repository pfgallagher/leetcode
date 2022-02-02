export {};

const sum = (nums: number[]): number => nums.reduce((a, c) => a + c, 0);

const unique = (nums: number[]): number[] =>
	nums.filter(n => nums.indexOf(n) === nums.lastIndexOf(n));

const sumOfUnique = (nums: number[]): number => sum(unique(nums));
