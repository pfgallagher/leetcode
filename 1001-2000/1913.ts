export {};

const product = (nums: number[]): number => nums.reduce((a, c) => a * c, 1);

const maxProductDifference = (nums: number[]): number => {
	nums.sort((a, b) => a - b);
	return product(nums.slice(-2)) - product(nums.slice(0, 2));
};
