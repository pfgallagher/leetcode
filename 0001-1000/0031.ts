const findDecreasingI = (nums: number[]): number | false => {
	for (let i = nums.length - 2; 0 <= i; i--) {
		if (nums[i] < nums[i + 1]) {
			return i;
		}
	}
	return false;
};

const findNextLargestI = (nums: number[], startI: number): number => {
	const startValue = nums[startI];
	let nextLargestI = 0;
	let nextLargestVal = Infinity;
	for (let i = startI + 1; i < nums.length; i++) {
		const curValue = nums[i];
		if (startValue < curValue && curValue <= nextLargestVal) {
			nextLargestVal = curValue;
			nextLargestI = i;
		}
	}
	return nextLargestI;
};

const swapInPlace = (nums: number[], startI: number, endI: number): void => {
	[nums[startI], nums[endI]] = [nums[endI], nums[startI]];
	return;
};

const reverseInPlace = (nums: number[], startI: number, endI: number): void => {
	while (startI < endI) {
		swapInPlace(nums, startI, endI);
		startI++;
		endI--;
	}
	return;
};

const nextPermutation = (nums: number[]): void => {
	const decreasingI = findDecreasingI(nums);
	if (decreasingI !== false) {
		const nextLargestI = findNextLargestI(nums, decreasingI);
		swapInPlace(nums, decreasingI, nextLargestI);
		reverseInPlace(nums, decreasingI + 1, nums.length - 1);
	} else {
		nums.sort((a, b) => a - b);
	}
	return;
};
