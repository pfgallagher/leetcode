export {};

function* iterateColumns(matrix: number[][]): Generator<number[]> {
	for (const i of Array(matrix[0].length).keys()) {
		const col: number[] = [];
		for (const row of matrix) {
			col.push(row[i]);
		}
		yield col;
	}
}

function* iterateMatrix(matrix: number[][]): Generator<number[]> {
	for (const row of matrix) {
		yield row;
	}
	for (const col of iterateColumns(matrix)) {
		yield col;
	}
}

const range = (n: number): number[] => {
	const res: number[] = [];
	for (let i = 1; i <= n; i++) {
		res.push(i);
	}
	return res;
};

const checkValid = (matrix: number[][]): boolean => {
	const nums = range(matrix.length);
	for (const rowOrCol of iterateMatrix(matrix)) {
		if (nums.some(num => !rowOrCol.includes(num))) {
			return false;
		}
	}
	return true;
};
