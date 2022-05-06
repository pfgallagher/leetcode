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

const canBeMadeFromDigits = (nFreq: Freq, digFreq: Freq): boolean => {
	for (const [n, count] of Object.entries(nFreq)) {
		if (!digFreq.hasOwnProperty(n) || digFreq[n] < count) {
			return false;
		}
	}
	return true;
};

const findEvenNumbers = (digits: number[]): number[] => {
	const digitsFreq = frequency(digits);
	const valid: number[] = [];
	for (let i = 100; i <= 998; i += 2) {
		if (
			canBeMadeFromDigits(
				frequency([...i.toString()].map(nStr => parseInt(nStr, 10))),
				digitsFreq,
			)
		) {
			valid.push(i);
		}
	}
	return valid;
};
