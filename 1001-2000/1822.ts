const arraySign = (nums: number[]): number =>
	nums.includes(0) ? 0 : Math.sign(nums.reduce((a, c) => a * c, 1));
