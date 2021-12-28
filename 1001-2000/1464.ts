const maxProduct = (nums: number[]): number => {
	nums.sort((a, b) => b - a);
	const [largest, secondLargest] = nums;
	return (largest - 1) * (secondLargest - 1);
};
