type Moves = number[][];
type Board = string[][];
type MoveCombo = Board[number];

function* iterateRows(board: Board): Generator<MoveCombo> {
	for (const row of board) {
		yield row;
	}
}

function* iterateColumns(board: Board): Generator<MoveCombo> {
	for (const i of Array(board[0].length).keys()) {
		const col: MoveCombo = [];
		for (const row of board) {
			col.push(row[i]);
		}
		yield col;
	}
}

function* iterateDiagonals(board: Board): Generator<MoveCombo> {
	yield [board[0][0], board[1][1], board[2][2]];
	yield [board[0][2], board[1][1], board[2][0]];
}

function* iterateBoard(board: Board): Generator<MoveCombo> {
	yield* iterateRows(board);
	yield* iterateColumns(board);
	yield* iterateDiagonals(board);
}

const genBoardWithMoves = (moves: Moves): Board => {
	const board = Array(3)
		.fill("")
		.map(() => Array(3).fill(""));
	for (const [i, [x, y]] of moves.entries()) {
		board[x][y] = !(i % 2) ? "X" : "O";
	}
	return board;
};

const tictactoe = (moves: Moves): string => {
	for (const moveCombo of iterateBoard(genBoardWithMoves(moves))) {
		if (moveCombo.every(move => move === "X")) {
			return "A";
		}
		if (moveCombo.every(move => move === "O")) {
			return "B";
		}
	}
	return moves.length === 9 ? "Draw" : "Pending";
};
