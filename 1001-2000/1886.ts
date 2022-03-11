type Matrix = number[][];

const rotateMatrix = (mat: Matrix): Matrix =>
	mat.map((row, rowI) =>
		row.map((_, colI) => mat[mat.length - 1 - colI][rowI]),
	);

const matricesAreEqual = (matA: Matrix, matB: Matrix): boolean =>
	matA.every((row, rowI) =>
		row.every((cell, colI) => cell === matB[rowI][colI]),
	);

function* iterateMatrixRotations(mat: Matrix): Generator<Matrix> {
	let rotationCount = 0;
	yield mat;
	while (rotationCount < 3) {
		mat = rotateMatrix(mat);
		yield mat;
		rotationCount++;
	}
}

const findRotation = (mat: Matrix, target: Matrix): boolean => {
	for (const rotation of iterateMatrixRotations(mat)) {
		if (matricesAreEqual(target, rotation)) {
			return true;
		}
	}
	return false;
};
