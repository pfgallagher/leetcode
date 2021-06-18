export {};

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

const sumLargestFromEachGroup = (grid: number[][]): number =>
	grid.map(group => Math.max(...group)).reduce((a, c) => a + c, 0);

const countNonZeroVals = (grid: number[][]): number =>
	grid.flat(Infinity).filter(v => v).length;

const projectionArea = (grid: number[][]): number =>
	countNonZeroVals(grid) +
	sumLargestFromEachGroup(grid) +
	sumLargestFromEachGroup(transpose(grid));
