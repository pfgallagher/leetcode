export {};

// const sumEvenAfterQueries = (nums: number[], queries: number[][]): number[] =>
// 	queries.reduce((acc, [val, i]) => {
// 		nums[i] += val;
// 		acc.push(nums.filter(num => !(num % 2)).reduce((a, c) => a + c, 0));
// 		return acc;
// 	}, []);

const isEven = (n: number): boolean => !(n % 2);

const sumEvenAfterQueries = (nums: number[], queries: number[][]): number[] => {
	const res: number[] = [];
	let sum = nums.filter(num => !(num % 2)).reduce((a, c) => a + c, 0);
	for (const [val, i] of queries) {
		if (isEven(nums[i])) {
			sum -= nums[i];
		}
		nums[i] += val;
		if (isEven(nums[i])) {
			sum += nums[i];
		}
		res.push(sum);
	}
	return res;
};
