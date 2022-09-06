export {};

const isInRange = (start: number, target: number, end: number): boolean =>
	start <= target && target <= end;

const search = (nums: number[], target: number): number => {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		}
		if (nums[left] <= nums[mid]) {
			if (isInRange(nums[left], target, nums[mid])) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (isInRange(nums[mid], target, nums[right])) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
};
