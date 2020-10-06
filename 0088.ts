const merge = (
	nums1: number[],
	m: number,
	nums2: number[],
	n: number,
): void => {
	let i = --n + m--;
	while (0 <= n) {
		nums1[i--] = nums2[n] < nums1[m] ? nums1[m--] : nums2[n--];
	}
	return;
};
