const findLHS = (nums: number[]): number => {
	let lhsLength = 0;
	const lhsMap = new Map<number, number>();
	for (const num of nums) {
		lhsMap.set(num, (lhsMap.get(num) || 0) + 1);
	}
	for (const key of lhsMap.keys()) {
		if (lhsMap.has(key + 1)) {
			lhsLength = Math.max(
				lhsLength,
				(lhsMap.get(key) || 0) + (lhsMap.get(key + 1) || 0),
			);
		}
	}
	return lhsLength;
};
