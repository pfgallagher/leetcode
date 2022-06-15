const findDifference = (nums1: number[], nums2: number[]): number[][] => {
	const diff1 = new Set<number>();
	const diff2 = new Set<number>();
	for (const n of nums1) {
		if (!nums2.includes(n)) {
			diff1.add(n);
		}
	}
	for (const n of nums2) {
		if (!nums1.includes(n)) {
			diff2.add(n);
		}
	}
	return [[...diff1], [...diff2]];
};
