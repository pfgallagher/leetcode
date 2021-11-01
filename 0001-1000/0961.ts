// const repeatedNTimes = (nums: number[]): number => {
// 	const n = nums.length / 2;
// 	const frequencyMap: { [n: number]: number } = {};
// 	for (const num of nums) {
// 		if (frequencyMap[num]) {
// 			frequencyMap[num]++;
// 		} else {
// 			frequencyMap[num] = 1;
// 		}
// 		if (frequencyMap[num] === n) {
// 			return num;
// 		}
// 	}
// 	return -1;
// };

const repeatedNTimes = (nums: number[]): number => {
	const frequencyMap: { [n: number]: boolean } = {};
	for (const num of nums) {
		if (frequencyMap[num]) {
			return num;
		} else {
			frequencyMap[num] = true;
		}
	}
	return -1;
};
