// const removeDuplicates = (nums: number[]): number => {
// 	for (let i = nums.length - 1; 0 < i; i--) {
// 		if (nums.indexOf(nums[i]) !== i) {
// 			nums.splice(i, 1);
// 		}
// 	}
// 	return nums.length;
// };

const removeDuplicates = (nums: number[]): number => {
	for (let i = nums.length - 1; 0 < i; i--) {
		if (nums[i] === nums[i - 1]) {
			nums.splice(i, 1);
		}
	}
	return nums.length;
};
