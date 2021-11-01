const isPowerOfThree = (n: number): boolean =>
	(Math.log10(n) / Math.log10(3)) % 1 === 0;
