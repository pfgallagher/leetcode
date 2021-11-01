const dominantIndex = (nums: number[]): number => {
	if (nums.length <= 1) {
		return 0;
	}
	const [largest, secondLargest] = [...nums].sort((a, b) => b - a);
	return secondLargest * 2 <= largest ? nums.indexOf(largest) : -1;
};
