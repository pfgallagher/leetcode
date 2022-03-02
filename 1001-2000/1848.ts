const matchingIndices = (nums: number[], target: number): number[] => {
	const matches: number[] = [];
	for (const [i, n] of nums.entries()) {
		if (n === target) {
			matches.push(i);
		}
	}
	return matches;
};

const getMinDistance = (
	nums: number[],
	target: number,
	start: number,
): number =>
	Math.min(...matchingIndices(nums, target).map(i => Math.abs(i - start)));
