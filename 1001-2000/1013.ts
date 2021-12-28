const canThreePartsEqualSum = (arr: number[]): boolean => {
	const targetSum = arr.reduce((a, c) => a + c, 0) / 3;
	let completedCount = 0;
	let cur = 0;
	for (const n of arr) {
		cur += n;
		if (cur === targetSum) {
			completedCount++;
			cur = 0;
		}
	}
	return 3 <= completedCount;
};
