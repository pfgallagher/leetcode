const isPrime = (n: number): boolean => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (!(n % i)) {
			return false;
		}
	}
	return true;
};

const countPrimes = (n: number): number => {
	let count = 0;
	for (let i = 2; i < n; i++) {
		if (isPrime(i)) {
			count++;
		}
	}
	return count;
};
