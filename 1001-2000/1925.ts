const countTriples = (n: number): number => {
	let count = 0;
	for (let a = 1; a < n - 1; a++) {
		for (let b = a + 1; b < n; b++) {
			const c = Math.sqrt(a ** 2 + b ** 2);
			if (Number.isInteger(c) && c <= n) {
				count += 2;
			}
		}
	}
	return count;
};
