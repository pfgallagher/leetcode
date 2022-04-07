const minimumDifference = (nums: number[], k: number): number => {
	nums.sort((a, b) => a - b);
	let min = Infinity;
	while (k <= nums.length) {
		const operands = nums.slice(-k);
		min = Math.min(min, operands.at(-1)! - operands[0]);
		nums.pop();
	}
	return min;
};
