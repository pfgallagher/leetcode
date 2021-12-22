const isSpecial = (n: number, arr: number[]): boolean => {
	let count = 0;
	for (const el of arr) {
		if (n <= el) {
			count++;
		}
	}
	return count === n;
};

const specialArray = (nums: number[]): number => {
	nums.sort((a, b) => a - b);
	for (let i = 0; i <= nums[nums.length - 1]; i++) {
		if (isSpecial(i, nums)) {
			return i;
		}
	}
	return -1;
};
