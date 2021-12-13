function* iterateMatrixDiagonals(mat: number[][]): Generator<number> {
	for (let x = 0, y = 0; x < mat.length; x++, y++) {
		yield mat[x][y];
	}
	const midI = Math.floor((mat.length - 1) / 2);
	for (let x = 0, y = mat.length - 1; x < mat.length; x++, y--) {
		if (x !== midI || y !== midI) {
			yield mat[x][y];
		}
	}
}

const diagonalSum = (mat: number[][]): number =>
	[...iterateMatrixDiagonals(mat)].reduce((a, c) => a + c, 0);
