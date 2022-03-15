export {};

type FreqMap = { [n: string]: number };

const frequency = (s: string): FreqMap => {
	const freqMap: FreqMap = {};
	for (const char of s) {
		if (freqMap[char]) {
			freqMap[char]++;
		} else {
			freqMap[char] = 1;
		}
	}
	return freqMap;
};

const makeEqual = (words: string[]): boolean =>
	Object.values(frequency(words.join(""))).every(
		charCount => !(charCount % words.length),
	);
