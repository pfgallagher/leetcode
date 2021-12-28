type CoordinatePair = [number, number];

const distance = ([r1, c1]: CoordinatePair, [r2, c2]: CoordinatePair): number =>
	Math.abs(r1 - r2) + Math.abs(c1 - c2);

const coordinatePairs = (rows: number, cols: number): CoordinatePair[] => {
	const pairs: CoordinatePair[] = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			pairs.push([i, j]);
		}
	}
	return pairs;
};

const allCellsDistOrder = (
	rows: number,
	cols: number,
	rCenter: number,
	cCenter: number,
): number[][] => {
	const targetPair: CoordinatePair = [rCenter, cCenter];
	return coordinatePairs(rows, cols).sort(
		(a, b) => distance(a, targetPair) - distance(b, targetPair),
	);
};
