const maxLengthBetweenEqualCharacters = (s: string): number =>
	[...new Set(s)].reduce(
		(max, char) =>
			(max = Math.max(s.lastIndexOf(char) - s.indexOf(char) - 1, max)),
		-Infinity,
	);
