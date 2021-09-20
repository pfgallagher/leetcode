function* iterateDigits(n: number): Generator<number> {
	while (n) {
		yield n % 10;
		n = Math.floor(n / 10);
	}
}

const subtractProductAndSum = (n: number): number => {
	let product = 1;
	let sum = 0;
	for (const d of iterateDigits(n)) {
		product *= d;
		sum += d;
	}
	return product - sum;
};
