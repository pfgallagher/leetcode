const formatKey = (a: number, b: number): string =>
	a < b ? `${a}${b}` : `${b}${a}`;

const numEquivDominoPairs = (dominoes: number[][]): number => {
	const equivPairs: { [domino: string]: number } = {};
	let numPairs = 0;
	for (const [a, b] of dominoes) {
		const k = formatKey(a, b);
		if (equivPairs[k] !== undefined) {
			equivPairs[k]++;
			numPairs += equivPairs[k];
		} else {
			equivPairs[k] = 0;
		}
	}
	return numPairs;
};
