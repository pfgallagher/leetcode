const sortedSquares = (nums: number[]): number[] => {
	const res: number[] = [];
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		const next = Math.abs(nums[end]) <= Math.abs(nums[start]) ? start : end;
		if (next === start) {
			start++;
		} else {
			end--;
		}
		res.unshift(nums[next] ** 2);
	}
	return res;
};
