const countPairs = (arr: number[], target: number): number =>
	arr.reduce((a, c) => (c === target ? a + 1 : a), 0);

const numIdenticalPairs = (nums: number[]): number => {
	let pairs = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		pairs += countPairs(nums.slice(i + 1), nums[i]);
	}
	return pairs;
};
