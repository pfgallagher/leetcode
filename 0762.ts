export {};

const factorial = (n: number): number => {
	let product = 1;
	for (let i = n; 0 < i; i--) {
		product *= i;
	}
	return product;
};

const isPrime = (n: number): boolean => 2 <= n && !((factorial(n - 1) + 1) % n);

const countSetBits = (n: number): number => {
	let count = 0;
	while (n) {
		count++;
		n &= n - 1;
	}
	return count;
};

const countPrimeSetBits = (left: number, right: number): number => {
	let count = 0;
	for (let i = left; i <= right; i++) {
		if (isPrime(countSetBits(i))) {
			count++;
		}
	}
	return count;
};
