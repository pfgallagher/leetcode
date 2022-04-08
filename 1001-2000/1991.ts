export {};

const sum = (nums: number[]): number => nums.reduce((a, c) => a + c, 0);

const findMiddleIndex = (nums: number[]): number => {
	for (const i of nums.keys()) {
		if (sum(nums.slice(0, i)) === sum(nums.slice(i + 1))) {
			return i;
		}
	}
	return -1;
};
