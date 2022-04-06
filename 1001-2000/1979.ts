export {};

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

const findGCD = (nums: number[]): number => {
	nums.sort((a, b) => a - b);
	return gcd(nums[0], nums[nums.length - 1]);
};
