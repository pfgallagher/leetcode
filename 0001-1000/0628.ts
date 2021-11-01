const product = (nums: number[]): number => nums.reduce((a, c) => a * c, 1);

const maximumProduct = (nums: number[]): number => {
	nums.sort((a, b) => a - b);
	return Math.max(
		product(nums.slice(-3)),
		product([...nums.slice(0, 2), ...nums.slice(-1)]),
	);
};
