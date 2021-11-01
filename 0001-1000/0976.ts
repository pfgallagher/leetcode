const largestPerimeter = (nums: number[]): number => {
	nums.sort((a, b) => a - b);
	while (3 <= nums.length) {
		const [a, b, c] = nums.slice(-3);
		if (c < a + b) {
			return a + b + c;
		}
		nums.pop();
	}
	return 0;
};
