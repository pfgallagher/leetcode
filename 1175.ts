export {};

const isPrime = (n: number): boolean => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (!(n % i)) {
			return false;
		}
	}
	return 2 <= n;
};

const countPrimes = (n: number): number => {
	let count = 0;
	for (let i = 0; i <= n; i++) {
		if (isPrime(i)) {
			count++;
		}
	}
	return count;
};

const rangeFrom1ToN = (n: number): number[] =>
	[...Array(n + 1).keys()].slice(1);

const numPrimeArrangements = (n: number): number => {
	const primeCount = countPrimes(n);
	return [
		...rangeFrom1ToN(primeCount),
		...rangeFrom1ToN(n - primeCount),
	].reduce((a, c) => (a * c) % 1_000_000_007);
};
