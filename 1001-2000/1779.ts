const manhattanDistance = (
	[x1, y1]: [number, number],
	[x2, y2]: [number, number],
): number => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const nearestValidPoint = (
	targetX: number,
	targetY: number,
	points: [number, number][],
): number => {
	let min = Infinity;
	let minI = -1;
	for (const [i, [x, y]] of points.entries()) {
		if (x === targetX || y === targetY) {
			const distance = manhattanDistance([targetX, targetY], [x, y]);
			if (distance < min) {
				min = distance;
				minI = i;
			}
		}
	}
	return minI;
};
