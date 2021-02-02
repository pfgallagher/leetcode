const findDisappearedNumbers = (nums: number[]): number[] => {
	const numSet = new Set(nums);
	const disappearedNumbers: number[] = [];
	for (let i = 1; i <= nums.length; i++) {
		if (!numSet.has(i)) {
			disappearedNumbers.push(i);
		}
	}
	return disappearedNumbers;
};
