const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

const frequency = (arr: number[]): { [n: number]: number } => {
	const freq: { [n: number]: number } = {};
	for (const el of arr) {
		if (freq[el]) {
			freq[el]++;
		} else {
			freq[el] = 1;
		}
	}
	return freq;
};

const hasGroupsSizeX = (deck: number[]): boolean =>
	2 <= Object.values(frequency(deck)).reduce((a, c) => gcd(a, c));
