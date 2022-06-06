const prefixCount = (words: string[], pref: string): number =>
	words.reduce((a, c) => (c.startsWith(pref) ? a + 1 : a), 0);
