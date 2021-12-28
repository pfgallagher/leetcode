export {};

type FreqMap = { [char: string]: number };

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

const countCharacters = (words: string[], chars: string): number => {
	const charsFreq = frequency(chars);
	return words
		.filter(word =>
			Object.entries(frequency(word)).every(
				([char, count]) => count <= charsFreq[char],
			),
		)
		.join("").length;
};
