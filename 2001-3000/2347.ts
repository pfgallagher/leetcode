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

const bestHand = (ranks: number[], suits: string[]): string => {
	if (suits.every(suit => suit === suits[0])) {
		return "Flush";
	}
	const maxRankCount = Math.max(...Object.values(frequency(ranks)));
	if (3 <= maxRankCount) {
		return "Three of a Kind";
	} else if (maxRankCount === 2) {
		return "Pair";
	}
	return "High Card";
};
