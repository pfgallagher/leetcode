const parseRange = (
	s: string,
): { startChar: string; endChar: string; startN: number; endN: number } => ({
	startChar: s[0],
	endChar: s[3],
	startN: parseInt(s[1], 10),
	endN: parseInt(s[4], 10),
});

const nextChar = (s: string): string =>
	String.fromCharCode(s.charCodeAt(0) + 1);

const cellsInRange = (s: string): string[] => {
	const cells: string[] = [];
	let { startChar, startN, endChar, endN } = parseRange(s);
	while (startChar <= endChar) {
		for (let i = startN; i <= endN; i++) {
			cells.push(`${startChar}${i}`);
		}
		startChar = nextChar(startChar);
	}
	return cells;
};
