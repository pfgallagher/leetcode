const maxScore = (s: string): number => {
	const { countOnes, max } = [...s].reduce(
		(a, c, i) => {
			if (c === "0") {
				a.countZeros++;
			} else {
				a.countOnes++;
			}
			if (i !== s.length - 1) {
				a.max = Math.max(a.countZeros - a.countOnes, a.max);
			}
			return a;
		},
		{ countZeros: 0, countOnes: 0, max: -Infinity },
	);
	return max + countOnes;
};
