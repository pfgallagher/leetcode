const majorityElement = (nums: number[]): number => {
	const nMap = new Map<number, number>();
	for (const num of nums) {
		const curCount = nMap.get(num);
		if (curCount) {
			nMap.set(num, curCount + 1);
		} else {
			nMap.set(num, 1);
		}
	}
	const target = nums.length / 2;
	const found = [...nMap.entries()].find(([_, count]) => target < count);
	return found !== undefined ? found[0] : -1;
};
