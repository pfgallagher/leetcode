export {};

type FreqMap = { [n: number]: number };

const frequency = (arr: number[]): FreqMap => {
	const freqMap: FreqMap = {};
	for (const n of arr) {
		if (freqMap[n]) {
			freqMap[n]++;
		} else {
			freqMap[n] = 1;
		}
	}
	return freqMap;
};

const mostFrequent = (freqMap: FreqMap): number => {
	let largest = -Infinity;
	let maxCount = -Infinity;
	for (const [n, count] of Object.entries(freqMap)) {
		if (maxCount < count) {
			largest = parseInt(n, 10);
			maxCount = count;
		}
	}
	return largest;
};

const findCenter = (edges: number[][]): number =>
	mostFrequent(frequency(edges.flat()));
