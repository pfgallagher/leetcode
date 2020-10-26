const singleNumber = (nums: number[]): number => {
	const numMap = new Map<number, number>();
	for (const num of nums) {
		numMap.set(num, (numMap.get(num) || 0) + 1);
	}
	for (const [num, count] of numMap.entries()) {
		if (count !== 2) {
			return num;
		}
	}
	return -1;
};
