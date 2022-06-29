const countPrefixes = (words: string[], s: string): number =>
	words.reduce((a, c) => (s.startsWith(c) ? a + 1 : a), 0);
