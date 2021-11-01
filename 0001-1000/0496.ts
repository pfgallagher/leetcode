const nextGreaterElement = (nums1: number[], nums2: number[]): number[] =>
	nums1.map(
		(n1, _) => nums2.find((n2, i2) => n1 < n2 && nums2.indexOf(n1) < i2) || -1,
	);
