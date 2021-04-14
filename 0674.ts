const findLengthOfLCIS = (nums: number[]): number => {
	const groups: number[][] = [[]];
	for (const [i, n] of nums.entries()) {
		const lastN = nums[i - 1] !== undefined ? nums[i - 1] : -Infinity;
		if (lastN < n) {
			groups[groups.length - 1].push(n);
		} else {
			groups.push([n]);
		}
	}
	return Math.max(...groups.map(group => group.length));
};
