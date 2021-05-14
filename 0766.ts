function* iterateDiagonally(matrix: number[][], [x, y]: [number, number]) {
	while (matrix?.[x]?.[y] !== undefined) {
		yield matrix[x][y];
		x++;
		y++;
	}
}

const findStartingCoords = (matrix: number[][]): [number, number][] =>
	[
		...Array(matrix[0].length)
			.fill(0)
			.map((x, i) => [x, i]),
		...Array(matrix.length)
			.fill(0)
			.map((y, i) => [i, y]),
	] as [number, number][];

const isToeplitzMatrix = (matrix: number[][]): boolean =>
	findStartingCoords(matrix).every(
		([x, y]) => new Set([...iterateDiagonally(matrix, [x, y])]).size === 1,
	);
