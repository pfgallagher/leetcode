// const moveZeroes = (nums: number[]): void => {
// 	for (const [i, num] of nums.entries()) {
// 		if (!num) {
// 			const nonZeroI = nums.findIndex((n, j) => n && i < j);
// 			if (nonZeroI !== -1) {
// 				[nums[i], nums[nonZeroI]] = [nums[nonZeroI], nums[i]];
// 			}
// 		}
// 	}
// };

const moveZeroes = (nums: number[]): void => {
	let nonZero = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i]) {
			[nums[nonZero++], nums[i]] = [nums[i], nums[nonZero]];
		}
	}
};
