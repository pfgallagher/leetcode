export {};

const isOdd = (n: number): boolean => !!(n % 2);

const threeConsecutiveOdds = (arr: number[]): boolean => {
	let count = 0;
	for (const n of arr) {
		if (isOdd(n)) {
			count++;
			if (count === 3) {
				return true;
			}
		} else {
			count = 0;
		}
	}
	return false;
};
