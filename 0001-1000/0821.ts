const shortestToChar = (s: string, c: string): number[] => {
	const cIndices: number[] = [];
	const sArr = [...s];
	for (const [i, char] of sArr.entries()) {
		if (char === c) {
			cIndices.push(i);
		}
	}
	return sArr.map((_, i) => Math.min(...cIndices.map(cI => Math.abs(cI - i))));
};
