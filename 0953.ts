interface AlienToEnglishMap {
	[char: string]: string;
}

const mapAlienToEnglish = (alienOrder: string): AlienToEnglishMap => {
	const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
	return Object.fromEntries(
		[...alienOrder].map((char, i) => [char, englishAlphabet[i]]),
	);
};

const englishToAlien = (
	englishWord: string,
	alienToEnglishMap: AlienToEnglishMap,
): string => [...englishWord].map(char => alienToEnglishMap[char]).join("");

const alienSort = (words: string[], alienOrder: string): string[] => {
	const alienToEnglishMap = mapAlienToEnglish(alienOrder);
	return [...words].sort((a, b) =>
		englishToAlien(a, alienToEnglishMap) < englishToAlien(b, alienToEnglishMap)
			? -1
			: 1,
	);
};

const isAlienSorted = (words: string[], order: string): boolean =>
	alienSort(words, order).every((sortedWord, i) => sortedWord === words[i]);
