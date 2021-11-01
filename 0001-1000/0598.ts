const maxCount = (m: number, n: number, ops: number[][]): number => {
	for (const [x, y] of ops) {
		m = Math.min(m, x);
		n = Math.min(n, y);
	}
	return m * n;
};
