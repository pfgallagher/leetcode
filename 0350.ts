interface IntersectionMap {
	[key: string]: number;
}

const toIntersectionMap = (nums: number[]): IntersectionMap => {
	const intersectionMap: IntersectionMap = {};
	for (const n of nums) {
		if (intersectionMap[n]) {
			intersectionMap[n]++;
		} else {
			intersectionMap[n] = 1;
		}
	}
	return intersectionMap;
};

const intersect = (nums1: number[], nums2: number[]): number[] => {
	const map1 = toIntersectionMap(nums1);
	const map2 = toIntersectionMap(nums2);
	const longest =
		Object.keys(map1).length < Object.keys(map2).length ? map2 : map1;
	const shortest = longest === map1 ? map2 : map1;
	let intersection: number[] = [];
	Object.keys(shortest).forEach(key => {
		if (longest[key]) {
			const maxInCommon = Math.min(shortest[key], longest[key]);
			intersection = intersection.concat(
				Array(maxInCommon).fill(parseInt(key, 10)),
			);
		}
	});
	return intersection;
};
