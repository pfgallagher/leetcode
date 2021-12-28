const createTargetArray = (nums: number[], index: number[]): number[] => {
	const targetArray: number[] = [];
	for (const i of nums.keys()) {
		targetArray.splice(index[i], 0, nums[i]);
	}
	return targetArray;
};
