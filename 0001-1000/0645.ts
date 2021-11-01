const findDupe = (nums: number[]): number => {
	for (const [i, n] of nums.entries()) {
		if (n === nums[i - 1]) {
			return n;
		}
	}
	return -1;
};

const range = (n: number): number[] =>
	Array(n)
		.fill(0)
		.map((_, i) => i + 1);

const findMissing = (nums: number[]): number =>
	range(nums.length).find(n => !nums.includes(n)) || -1;

const findErrorNums = (nums: number[]): number[] => {
	const sorted = nums.sort((a, b) => a - b);
	return [findDupe(sorted), findMissing(sorted)];
};
