const sortByLexoValAscThenByLenDesc = (words: string[]): string[] =>
	words.sort((a, b) =>
		a.length === b.length ? (a < b ? -1 : b < a ? 1 : 0) : b.length - a.length,
	);

const hasAllSubstrings = (word: string, words: string[]): boolean =>
	[...word]
		.map((_, i, arr) => arr.slice(0, i).join(""))
		.slice(1)
		.every(substring => words.includes(substring));

const longestWord = (words: string[]): string => {
	for (const word of sortByLexoValAscThenByLenDesc(words)) {
		if (hasAllSubstrings(word, words)) {
			return word;
		}
	}
	throw new Error("No words provided.");
};
