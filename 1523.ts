const divideInts = (numerator: number, denominator: number): number =>
	Math.floor(numerator / denominator);

const isOdd = (n: number): boolean => !!(n % 2);

const calculateOddOffset = (low: number, high: number): number =>
	isOdd(low) || isOdd(high) ? 1 : 0;

const countOdds = (low: number, high: number): number =>
	divideInts(high - low, 2) + calculateOddOffset(low, high);
