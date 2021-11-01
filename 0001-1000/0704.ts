const search = (nums: number[], target: number): number => {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		const midI = Math.floor((start + end) / 2);
		const midV = nums[midI];
		if (midV === target) {
			return midI;
		}
		if (midV < target) {
			start = midI + 1;
		} else {
			end = midI - 1;
		}
	}
	return -1;
};
