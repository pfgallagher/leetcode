// const isOdd = (n: number): boolean => !isEven(n);

// const isEven = (n: number): boolean => !(n % 2);

// const sortArrayByParityII = (nums: number[]): number[] => {
// 	nums.forEach((n, i) => {
// 		const swapI =
// 			isEven(n) && isOdd(i)
// 				? nums.findIndex((n, i) => isOdd(n) && isEven(i))
// 				: isOdd(n) && isEven(i)
// 				? nums.findIndex((n, i) => isEven(n) && isOdd(i))
// 				: undefined;
// 		if (swapI) {
// 			[nums[i], nums[swapI]] = [nums[swapI], nums[i]];
// 		}
// 	});
// 	return nums;
// };

const isEven = (n: number): boolean => !(n % 2);

function* zip(arr1: number[], arr2: number[]) {
	while (arr1.length || arr2.length) {
		const arr1El = arr1.shift();
		if (arr1El !== undefined) {
			yield arr1El;
		}
		const arr2El = arr2.shift();
		if (arr2El !== undefined) {
			yield arr2El;
		}
	}
}

const sortArrayByParityII = (nums: number[]): number[] => [
	...zip(
		...nums.reduce<[number[], number[]]>(
			(a, c) => {
				if (isEven(c)) {
					a[0].push(c);
				} else {
					a[1].push(c);
				}
				return a;
			},
			[[], []],
		),
	),
];
