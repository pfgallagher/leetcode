const isMonotonic = (nums: number[]): boolean => {
	const numsWithoutLast = nums.slice(0, -1);
	return (
		numsWithoutLast.every((num, i) => num <= nums[i + 1]) ||
		numsWithoutLast.every((num, i) => nums[i + 1] <= num)
	);
};
