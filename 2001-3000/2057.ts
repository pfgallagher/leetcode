const smallestEqual = (nums: number[]): number =>
	nums.findIndex((n, i) => i % 10 === n);
