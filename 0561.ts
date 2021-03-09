// const chunkArr = (arr: number[]): number[][] => {
// 	const chunked: number[][] = [[]];
// 	while (arr.length) {
// 		const last = chunked[chunked.length - 1];
// 		const shifted = arr.shift();
// 		if (shifted !== undefined) {
// 			if (last.length < 2) {
// 				last.push(shifted);
// 			} else {
// 				chunked.push([shifted]);
// 			}
// 		}
// 	}
// 	return chunked;
// };

// const arrayPairSum = (nums: number[]): number =>
// 	chunkArr(nums.sort((a, b) => a - b))
// 		.map(pair => Math.min(...pair))
// 		.reduce((a, c) => a + c, 0);

const arrayPairSum = (nums: number[]): number => {
	const sorted = nums.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < sorted.length; i += 2) {
		sum += sorted[i];
	}
	return sum;
};
