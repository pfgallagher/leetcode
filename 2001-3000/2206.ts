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

const divideArray = (nums: number[]): boolean =>
	Object.values(frequency(nums)).every(count => !(count % 2));
