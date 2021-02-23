// const findDivisors = (num: number): number[] => {
// 	const divisors: number[] = [];
// 	for (let i = num - 1; 0 < i; i--) {
// 		if (!(num % i)) {
// 			divisors.push(i);
// 		}
// 	}
// 	return divisors;
// };

// const checkPerfectNumber = (num: number): boolean =>
// 	num === findDivisors(num).reduce((a, c) => a + c, 0);

const checkPerfectNumber = (num: number): boolean => {
	let sum = 0;
	for (let i = num - 1; 0 < i; i--) {
		if (!(num % i)) {
			sum += i;
		}
	}
	return sum === num;
};
