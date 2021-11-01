const cleanStr = (str: string): string =>
	str
		.replace(/[^\w\s]/g, " ")
		.replace(/\s{2,}/g, " ")
		.toLowerCase();

const mostCommonWord = (paragraph: string, banned: string[]): string => {
	const freqMap: { [word: string]: number } = {};
	for (const bannedWord of banned) {
		freqMap[bannedWord] = -Infinity;
	}
	for (const word of cleanStr(paragraph).split(" ")) {
		if (freqMap[word]) {
			freqMap[word]++;
		} else {
			freqMap[word] = 1;
		}
	}
	return Object.keys(freqMap).reduce((a, c) =>
		freqMap[a] < freqMap[c] ? c : a,
	);
};
