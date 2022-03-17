const arrIsStrictlyIncreasing = (nums: number[]): boolean =>
	nums.every((n, i) => (nums[i - 1] ?? -Infinity) < n);

function* iterateWithEachIndexRemoved(nums: number[]): Generator<number[]> {
	for (const i of nums.keys()) {
		const clone = [...nums];
		clone.splice(i, 1);
		yield clone;
	}
}

const canBeIncreasing = (nums: number[]): boolean => {
	for (const arr of iterateWithEachIndexRemoved(nums)) {
		if (arrIsStrictlyIncreasing(arr)) {
			return true;
		}
	}
	return false;
};
