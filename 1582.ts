const freq = (rowOrCol: number[]): number =>
	rowOrCol.reduce((a, c) => (c === 1 ? a + 1 : a), 0);

const possibleSpecialRowIndices = (mat: number[][]): number[] =>
	mat.reduce((acc, row, rowI) => {
		if (freq(row) === 1) {
			acc.push(rowI);
		}
		return acc;
	}, []);

const getCorrespondingCol = (
	mat: number[][],
	possibleSpecialRowI: number,
): number[] => {
	const colI = mat[possibleSpecialRowI].indexOf(1);
	return mat.map(row => row[colI]);
};

const numSpecial = (mat: number[][]): number => {
	let count = 0;
	for (const i of possibleSpecialRowIndices(mat)) {
		if (freq(getCorrespondingCol(mat, i)) === 1) {
			count++;
		}
	}
	return count;
};
