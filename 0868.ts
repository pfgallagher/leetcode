const binaryGap = (n: number): number => {
	const binN = n.toString(2);
	const gapMatches = binN.match(/(?!1)0+(?=1)/g);
	if (gapMatches) {
		return Math.max(...gapMatches.map(match => match.length)) + 1;
	}
	return binN.match(/11/g) ? 1 : 0;
};
