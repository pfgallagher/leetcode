// const twoSum = (nums: number[], target: number): [number, number] => {
// 	for (const [i, n] of nums.entries()) {
// 		const matchI = nums.findIndex(
// 			(innerN, j) => innerN === target - n && i < j,
// 		);
// 		if (0 <= matchI) {
// 			return [i, matchI];
// 		}
// 	}
// 	return [-1, -1];
// };

const twoSum = (nums: number[], target: number): [number, number] => {
	const sumMap = new Map();
	for (const [i, n] of nums.entries()) {
		if (sumMap.has(n)) {
			return [sumMap.get(n), i];
		}
		sumMap.set(target - n, i);
	}
	return [-1, -1];
};
