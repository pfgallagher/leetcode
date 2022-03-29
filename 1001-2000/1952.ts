const isThree = (n: number): boolean => {
	const factors = new Set([1, n]);
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (Number.isInteger(n / i)) {
			factors.add(i).add(n / i);
		}
	}
	return factors.size === 3;
};
