const countElements = (nums: number[]): number => {
	const max = Math.max(...nums);
	const min = Math.min(...nums);
	let count = 0;
	for (const n of nums) {
		if (min < n && n < max) {
			count++;
		}
	}
	return count;
};
