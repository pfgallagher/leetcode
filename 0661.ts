const imageSmoother = (M: number[][]): number[][] => {
	const smoothedCells: number[][] = Array(M.length)
		.fill(0)
		.map(() => Array(M[0].length).fill(0));
	M.forEach((row, rowI) => {
		row.forEach((cell, colI) => {
			const cells = [
				M?.[rowI - 1]?.[colI - 1],
				M?.[rowI - 1]?.[colI],
				M?.[rowI - 1]?.[colI + 1],
				M?.[rowI]?.[colI - 1],
				cell,
				M?.[rowI]?.[colI + 1],
				M?.[rowI + 1]?.[colI - 1],
				M?.[rowI + 1]?.[colI],
				M?.[rowI + 1]?.[colI + 1],
			].filter(cell => cell !== undefined);
			smoothedCells[rowI][colI] = Math.floor(
				cells.reduce((a, c) => a + c, 0) / cells.length,
			);
		});
	});
	return smoothedCells;
};
