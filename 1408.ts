const stringMatching = (words: string[]): string[] =>
	words.filter((word, wordI) =>
		words.some(
			(otherWord, otherWordI) =>
				wordI !== otherWordI && otherWord.includes(word),
		),
	);
