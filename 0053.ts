const maxSubArray = (nums: number[]): number => {
	let best = -Infinity;
	let cur = 0;
	for (const n of nums) {
		cur = Math.max(n, cur + n);
		best = Math.max(best, cur);
	}
	return best;
};
