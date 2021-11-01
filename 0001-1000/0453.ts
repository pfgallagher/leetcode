// const minMoves = (nums: number[]): number => {
// 	let min = Infinity;
// 	let sum = 0;
// 	for (const n of nums) {
// 		if (n < min) {
// 			min = n;
// 		}
// 		sum += n;
// 	}
// 	return sum - min * nums.length;
// };

const minMoves = (nums: number[]): number => {
	const min = Math.min(...nums);
	return nums.reduce((a, c) => a + c - min, 0);
};
