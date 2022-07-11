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

const digitCount = (num: string): boolean => {
	const freq = frequency(num);
	return [...num].every(
		(nStr, i) => (freq[i] ?? 0) === Number.parseInt(nStr, 10),
	);
};
