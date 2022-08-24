export {};

const stringify = (nums: number[]): string =>
	nums.sort((a, b) => a - b).join(",");

const parse = (numsStr: string[]): number[][] =>
	numsStr
		.map(nums => nums.split(","))
		.map(nums => nums.map(num => Number.parseInt(num)));

const twoSum = (nums: number[], target: number): number[][] => {
	const sumMap = new Map<number, number>();
	const sums = new Set<string>();
	for (const [i, n] of nums.entries()) {
		if (sumMap.has(n)) {
			sums.add(stringify([nums[sumMap.get(n)!], nums[i]]));
		}
		sumMap.set(target - n, i);
	}
	return parse([...sums]);
};

const threeSum = (nums: number[]): number[][] => {
	const sums = new Set<string>();
	for (let i = 0; i < nums.length; i++) {
		const cur = nums[i];
		for (const pair of twoSum(
			[...nums.slice(0, i), ...nums.slice(i + 1)],
			-cur,
		)) {
			sums.add(stringify([cur, ...pair]));
		}
	}
	return parse([...sums]);
};
