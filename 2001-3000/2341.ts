export {};

interface Freq {
	[n: string]: number;
}

const frequency = (nums: number[]): Freq => {
	const freq: Freq = {};
	for (const n of nums) {
		if (freq.hasOwnProperty(n)) {
			freq[n]++;
		} else {
			freq[n] = 1;
		}
	}
	return freq;
};

const numberOfPairs = (nums: number[]): number[] => {
	let pairCount = 0;
	let leftoverCount = 0;
	const freq = frequency(nums);
	for (const count of Object.values(freq)) {
		if (!(count % 2)) {
			pairCount += count / 2;
		} else {
			pairCount += (count - 1) / 2;
			leftoverCount++;
		}
	}
	return [pairCount, leftoverCount];
};
