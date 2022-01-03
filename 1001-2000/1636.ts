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

const frequencySort = (nums: number[]): number[] => {
	const freq = frequency(nums);
	return nums.sort((a, b) => {
		const freqA = freq[a];
		const freqB = freq[b];
		return freqA === freqB ? b - a : freqA - freqB;
	});
};
