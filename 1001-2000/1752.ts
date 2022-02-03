const rotate = (nums: number[]): number[] => {
	if (nums.length) {
		nums.push(nums.shift()!);
	}
	return nums;
};

function* iterateRotations(nums: number[]): Generator<number[]> {
	yield nums;
	for (let i = 0; i < nums.length; i++) {
		nums = rotate(nums);
		yield nums;
	}
}

const isAscending = (nums: number[]): boolean =>
	nums.every((n, i, arr) => {
		const prev = arr[i - 1];
		if (prev !== undefined) {
			return prev <= n;
		}
		return true;
	});

const check = (nums: number[]): boolean => {
	for (const rotation of iterateRotations(nums)) {
		if (isAscending(rotation)) {
			return true;
		}
	}
	return false;
};
