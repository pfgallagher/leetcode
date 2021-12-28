const oddCells = (m: number, n: number, indices: number[][]): number => {
	const matrix = Array(m)
		.fill(0)
		.map(() => Array(n).fill(0));
	for (const [x, y] of indices) {
		for (let i = 0; i < matrix[x].length; i++) {
			matrix[x][i]++;
		}
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][y]++;
		}
	}
	return matrix.flat().reduce((a, c) => (c % 2 ? a + 1 : a), 0);
};
