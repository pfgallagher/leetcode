function* iterateSubsets(nums: number[], offset = 0): Generator<number[]> {
	yield [];
	while (offset < nums.length) {
		const first = nums[offset++];
		for (const subset of iterateSubsets(nums, offset)) {
			subset.unshift(first);
			yield subset;
		}
	}
}

const XORSum = (nums: number[]): number => nums.reduce((a, c) => a ^ c, 0);

const subsetXORSum = (nums: number[]): number =>
	[...iterateSubsets(nums)].reduce((a, c) => a + XORSum(c), 0);
