const balancedStringSplit = (s: string): number => {
	const count: {
		[counter: string]: number;
		balanced: number;
		R: number;
		L: number;
	} = {
		balanced: 0,
		R: 0,
		L: 0,
	};
	for (const char of s) {
		count[char]++;
		if (count.R === count.L) {
			count.balanced++;
			count.R = 0;
			count.L = 0;
		}
	}
	return count.balanced;
};
