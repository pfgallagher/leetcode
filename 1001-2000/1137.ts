const cache: { [n: number]: number } = {
	0: 0,
	1: 1,
	2: 1,
};

const tribonacci = (n: number): number => {
	if (n in cache) {
		return cache[n];
	}
	cache[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
	return cache[n];
};
