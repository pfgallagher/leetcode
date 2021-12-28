const includesZero = (n: number): boolean => /0/g.test(n.toString());

const getNoZeroIntegers = (n: number): number[] => {
	for (let i = 1; i < n; i++) {
		const diff = n - i;
		if (!includesZero(i) && !includesZero(diff)) {
			return [i, diff];
		}
	}
	return [-1, -1];
};
