const removeElement = (nums: number[], val: number): number => {
	for (let i = nums.length - 1; 0 <= i; i--) {
		if (nums[i] === val) {
			nums.splice(i, 1);
		}
	}
	return nums.length;
};
