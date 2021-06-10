const transpose = (matrix: number[][]): number[][] => {
	const transposedMatrix: number[][] = [];
	while (matrix[0].length) {
		const transposedRow: number[] = [];
		for (const row of matrix) {
			transposedRow.push(row.shift() as number);
		}
		transposedMatrix.push(transposedRow);
	}
	return transposedMatrix;
};
