const containsNearbyDuplicates = (nums: number[], k: number): boolean => {
	const dupMap = new Map();
	for (const [i, num] of nums.entries()) {
		if (!dupMap.has(num)) {
			dupMap.set(num, i);
		} else {
			if (Math.abs(i - dupMap.get(num)) <= k) {
				return true;
			} else {
				dupMap.set(num, i);
			}
		}
	}
	return false;
};
