const numOfStrings = (patterns: string[], word: string): number =>
	patterns.reduce((a, c) => (word.includes(c) ? a + 1 : a), 0);
