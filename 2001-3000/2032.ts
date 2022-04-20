const totalFrequency = (...arrs: number[][]): [number, number][] => {
	const numMap = new Map<number, number>();
	for (const nums of arrs) {
		for (const n of new Set(nums)) {
			numMap.set(n, (numMap.get(n) ?? 0) + 1);
		}
	}
	return [...numMap.entries()];
};

const twoOutOfThree = (
	nums1: number[],
	nums2: number[],
	nums3: number[],
): number[] =>
	totalFrequency(nums1, nums2, nums3).reduce<number[]>(
		(a, [n, count]) => (2 <= count ? (a.push(n), a) : a),
		[],
	);
