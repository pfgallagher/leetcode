const isPowerOfFour = (n: number): boolean =>
	(Math.log10(n) / Math.log10(4)) % 1 === 0;
