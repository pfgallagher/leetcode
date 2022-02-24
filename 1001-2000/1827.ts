export {};

// const minOperations = (nums: number[]): number =>
// 	nums.reduce((acc, _, i, arr) => {
// 		while (arr[i] <= (arr[i - 1] ?? -Infinity)) {
// 			arr[i]++;
// 			acc++;
// 		}
// 		return acc;
// 	}, 0);

const minOperations = (nums: number[]): number => {
	let opCount = 0;
	for (let i = 1; i < nums.length; i++) {
		const [cur, prev] = [nums[i], nums[i - 1]];
		if (cur <= prev) {
			const diff = prev - cur + 1;
			opCount += diff;
			nums[i] += diff;
		}
	}
	return opCount;
};
