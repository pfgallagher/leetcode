export {};

const isEven = (n: number): boolean => !(n % 2);

const countDigits = (n: number): number => Math.floor(Math.log10(n)) + 1;

const findNumbers = (nums: number[]): number =>
	nums.filter(num => isEven(countDigits(num))).length;
