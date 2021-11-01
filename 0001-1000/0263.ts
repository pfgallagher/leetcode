const isUgly = (num: number): boolean => {
	if (1 <= num) {
		const uglyFactors = [2, 3, 5];
		for (const uglyFactor of uglyFactors) {
			while (!(num % uglyFactor)) {
				num /= uglyFactor;
			}
		}
		return num === 1;
	}
	return false;
};
