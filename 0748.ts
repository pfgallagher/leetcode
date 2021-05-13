export {};

type FreqMap = { [char: string]: number };

const cleanStr = (str: string): string =>
	str.replace(/[\d\s]/g, "").toLowerCase();

const frequency = (str: string): FreqMap => {
	const freqMap: FreqMap = {};
	for (const char of [...str]) {
		if (freqMap[char]) {
			freqMap[char]++;
		} else {
			freqMap[char] = 1;
		}
	}
	return freqMap;
};

const filterNonCompletingWords = (
	licenseFreq: FreqMap,
	words: string[],
): string[] =>
	words.filter(word => {
		const wordFreq = frequency(word);
		return Object.entries(licenseFreq).every(
			([char, count]) => wordFreq[char] && count <= wordFreq[char],
		);
	});

const findShortestCompletingWord = (completingWords: string[]): string => {
	const shortestLength = Math.min(
		...completingWords.map(completingWord => completingWord.length),
	);
	return completingWords.find(
		completingWord => completingWord.length === shortestLength,
	) as string;
};

const shortestCompletingWord = (
	licensePlate: string,
	words: string[],
): string =>
	findShortestCompletingWord(
		filterNonCompletingWords(frequency(cleanStr(licensePlate)), words),
	);
