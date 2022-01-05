const getMaximumGenerated = (n: number): number => {
	if (2 <= n) {
		const nums = [0, 1];
		for (let i = 2; i <= n; i++) {
			const quotient = Math.floor(i / 2);
			nums[i] = !(i % 2) ? nums[quotient] : nums[quotient] + nums[quotient + 1];
		}
		return Math.max(...nums);
	}
	return n;
};
