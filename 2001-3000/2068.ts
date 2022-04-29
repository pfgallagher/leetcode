export {};

type FreqMap = { [char: string]: number };

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

const maxFreqDiff = (freq1: FreqMap, freq2: FreqMap): number =>
	[...new Set([...Object.keys(freq1), ...Object.keys(freq2)])].reduce(
		(maxDiff, key) => {
			maxDiff = Math.max(
				maxDiff,
				Math.abs((freq1[key] ?? 0) - (freq2[key] ?? 0)),
			);
			return maxDiff;
		},
		-Infinity,
	);

const checkAlmostEquivalent = (word1: string, word2: string): boolean | any =>
	maxFreqDiff(frequency(word1), frequency(word2)) <= 3;
