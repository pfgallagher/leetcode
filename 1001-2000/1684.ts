const countConsistentStrings = (allowed: string, words: string[]): number =>
	words.reduce(
		(acc, word) =>
			[...word].every(char => allowed.includes(char)) ? acc + 1 : acc,
		0,
	);
