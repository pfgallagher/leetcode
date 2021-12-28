export {};

const sum = (nums: number[]): number => nums.reduce((a, c) => a + c, 0);

const minSubsequence = (nums: number[]): number[] => {
	nums.sort((a, b) => b - a);
	for (let i = 1; i <= nums.length; i++) {
		const subSequence = nums.slice(0, i);
		const remaining = nums.slice(i);
		if (sum(remaining) < sum(subSequence)) {
			return subSequence;
		}
	}
	return [];
};
