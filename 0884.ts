export {};

type FreqMap = { [word: string]: number };

const frequency = (words: string[]): FreqMap => {
	const freqMap: FreqMap = {};
	for (const word of words) {
		if (freqMap[word]) {
			freqMap[word]++;
		} else {
			freqMap[word] = 1;
		}
	}
	return freqMap;
};

const uncommonFromSentences = (s1: string, s2: string): string[] =>
	Object.entries(frequency([...s1.split(" "), ...s2.split(" ")]))
		.filter(([_, count]) => count === 1)
		.map(([word]) => word);
