// const intersection = (nums1: number[], nums2: number[]): number[] => {
// 	const longest = nums1.length < nums2.length ? nums2 : nums1;
// 	const shortest = longest === nums1 ? nums2 : nums1;
// 	return [...new Set(longest.filter(n => shortest.includes(n)))];
// };

const intersection = (nums1: number[], nums2: number[]): number[] => {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	const shortest = set1.size < set2.size ? set1 : set2;
	const longest = shortest === set1 ? set2 : set1;
	const intersectionArr: number[] = [];
	for (const n of shortest) {
		if (longest.has(n)) {
			intersectionArr.push(n);
		}
	}
	return intersectionArr;
};
