const mySqrt = (x: number): number => {
	if (x === 0) {
		return 0;
	}
	let next = x;
	let prev = x;
	do {
		prev = next;
		next = (prev + x / prev) / 2;
	} while (Math.abs(next - prev) > Number.EPSILON);
	return Math.trunc(next);
};
