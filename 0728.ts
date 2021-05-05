export {};

const range = (left: number, right: number): number[] =>
	Array(right - left + 1)
		.fill(0)
		.map((_, i) => i + left);

const nToDigs = (n: number): number[] =>
	[...n.toString()].map(d => parseInt(d, 10));

const selfDividingNumbers = (left: number, right: number): number[] =>
	range(left, right).filter(n => nToDigs(n).every(d => d && !(n % d)));
