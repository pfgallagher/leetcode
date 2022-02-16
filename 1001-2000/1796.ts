const extractUniqueDigits = (s: string): number[] =>
	[...new Set(s.match(/\d/g))].map(nStr => parseInt(nStr, 10));

const secondHighest = (s: string): number => {
	const sortedUniqueDigits = extractUniqueDigits(s).sort((a, b) => a - b);
	return 2 <= sortedUniqueDigits.length
		? sortedUniqueDigits[sortedUniqueDigits.length - 2]
		: -1;
};
