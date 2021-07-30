const findRook = (board: string[][]): [number, number] => {
	for (const [rowI, row] of board.entries()) {
		for (const [colI, piece] of row.entries()) {
			if (piece === "R") {
				return [rowI, colI];
			}
		}
	}
	return [-1, -1];
};

const scanLine = (line: string[], rookI: number): number => {
	let captureCount = 0;
	for (let i = rookI - 1; 0 <= i; i--) {
		const piece = line[i];
		if (piece === "p") {
			captureCount++;
			break;
		}
		if (piece === "B") {
			break;
		}
	}
	for (let i = rookI + 1; i < line.length; i++) {
		const piece = line[i];
		if (piece === "p") {
			captureCount++;
			break;
		}
		if (piece === "B") {
			break;
		}
	}
	return captureCount;
};

const getCol = (board: string[][], colI: number): string[] => {
	const col: string[] = [];
	for (const row of board) {
		col.push(row[colI]);
	}
	return col;
};

const numRookCaptures = (board: string[][]): number => {
	let captureCount = 0;
	const [rowI, colI] = findRook(board);
	captureCount += scanLine(board[rowI], colI);
	captureCount += scanLine(getCol(board, colI), rowI);
	return captureCount;
};
