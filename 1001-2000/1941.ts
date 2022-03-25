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

const areOccurrencesEqual = (s: string): boolean =>
	Object.values(frequency(s)).every((count, i, arr) =>
		i ? count === arr[i - 1] : true,
	);
