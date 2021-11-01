const findMaxConsecutiveOnes = (nums: number[]): number => {
	let max = 0;
	let cur = 0;
	for (const n of nums) {
		if (n) {
			cur++;
		} else {
			cur = 0;
		}
		if (max < cur) {
			max = cur;
		}
	}
	return max;
};
