const keyIndices = (nums: number[], key: number): number[] =>
	nums.reduce<number[]>((a, c, i) => {
		if (c === key) {
			a.push(i);
		}
		return a;
	}, []);

const findKDistantIndices = (
	nums: number[],
	key: number,
	k: number,
): number[] => {
	const indicesOfKey = keyIndices(nums, key);
	const kDistantIndices: number[] = [];
	for (const i of nums.keys()) {
		if (indicesOfKey.some(j => Math.abs(i - j) <= k)) {
			kDistantIndices.push(i);
		}
	}
	return kDistantIndices;
};
