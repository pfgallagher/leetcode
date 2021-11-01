export {};

const sum = (nums: number[]): number => nums.reduce((a, c) => a + c, 0);

const fairCandySwap = (aliceSizes: number[], bobSizes: number[]): number[] => {
	const d = (sum(bobSizes) - sum(aliceSizes)) / 2;
	for (const a of aliceSizes) {
		const fairSwap = a + d;
		if (bobSizes.includes(fairSwap)) {
			return [a, fairSwap];
		}
	}
	return [];
};
