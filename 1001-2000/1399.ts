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

const metaFrequency = (arr: number[]): FreqMap =>
	frequency(Object.values(frequency(arr)));

const countOfLargestGroup = (metaFreq: FreqMap): number =>
	metaFreq[Math.max(...Object.keys(metaFreq).map(n => parseInt(n, 10)))];

const sumDigits = (n: number): number =>
	n < 10 ? n : [...n.toString()].reduce((a, c) => a + parseInt(c, 10), 0);

const rangeOfSummedDigits = (n: number): number[] => {
	const sums: number[] = [];
	for (let i = 1; i <= n; i++) {
		sums.push(sumDigits(i));
	}
	return sums;
};

const countLargestGroup = (n: number): number =>
	countOfLargestGroup(metaFrequency(rangeOfSummedDigits(n)));
