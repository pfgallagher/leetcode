const maximumDifference = (nums: number[]): number => {
	let min = Infinity;
	let maxDiff = -Infinity;
	for (const n of nums) {
		min = Math.min(min, n);
		maxDiff = Math.max(n - min, maxDiff);
	}
	return maxDiff || -1;
};
