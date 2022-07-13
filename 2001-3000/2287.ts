export {};

interface Freq {
	[dig: string]: number;
}

const frequency = (numStr: string): Freq => {
	const freq: Freq = {};
	for (const dig of numStr) {
		if (freq.hasOwnProperty(dig)) {
			freq[dig]++;
		} else {
			freq[dig] = 1;
		}
	}
	return freq;
};

const rearrangeCharacters = (s: string, target: string): number => {
	const sFreq = frequency(s);
	const targetFreq = frequency(target);
	const maxCopies = [...target].reduce<number[]>((acc, char) => {
		const sCharFreq = sFreq[char];
		const tCharFreq = targetFreq[char];
		acc.push(
			sCharFreq !== undefined && tCharFreq !== undefined
				? Math.floor(sCharFreq / tCharFreq)
				: 0,
		);
		return acc;
	}, []);
	return Math.min(...maxCopies);
};
