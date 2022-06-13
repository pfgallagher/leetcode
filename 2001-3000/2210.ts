const findNeighbors = (nums: number[], i: number): [number, number] => {
	const cur = nums[i];
	let beforeI = i - 1;
	while (cur === nums[beforeI]) {
		beforeI--;
	}
	let afterI = i + 1;
	while (cur === nums[afterI]) {
		afterI++;
	}
	return [nums[beforeI], nums[afterI]];
};

const isHillOrValley = (before: number, cur: number, after: number): boolean =>
	(before < cur && after < cur) || (cur < before && cur < after);

const countHillValley = (nums: number[]): number => {
	let count = 0;
	for (let i = 1; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			continue;
		}
		const [before, after] = findNeighbors(nums, i);
		if (isHillOrValley(before, nums[i], after)) {
			count++;
		}
	}
	return count;
};
