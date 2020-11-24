const isHappy = (n: number, seen: number[] = []): boolean => {
	if (seen.includes(n)) {
		return false;
	}
	seen.push(n);
	const sumOfDigitsSquared = [...n.toString()]
		.map(num => parseInt(num, 10) ** 2)
		.reduce((a, c) => a + c, 0);
	return sumOfDigitsSquared === 1 ? true : isHappy(sumOfDigitsSquared, seen);
};
