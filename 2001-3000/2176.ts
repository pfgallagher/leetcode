export {};

const countPairs = (nums: number[], k: number): number => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j] && !((i * j) % k)) {
				count++;
			}
		}
	}
	return count;
};
