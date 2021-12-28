export {};

type FreqMap = { [n: number]: number };

const frequency = (arr: number[]): FreqMap => {
	const freqMap: FreqMap = {};
	for (const n of arr) {
		if (freqMap[n] !== undefined) {
			freqMap[n]++;
		} else {
			freqMap[n] = 1;
		}
	}
	return freqMap;
};

const uniqueOccurrences = (arr: number[]): boolean => {
	const freqVals = Object.values(frequency(arr));
	return freqVals.length === new Set(freqVals).size;
};
