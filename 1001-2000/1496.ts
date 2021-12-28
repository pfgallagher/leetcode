enum Direction {
	N = "N",
	E = "E",
	S = "S",
	W = "W",
}

const determineNextCoords = (
	[x, y]: [number, number],
	direction: Direction,
): [number, number] => {
	switch (direction) {
		case Direction.N: {
			return [x, y + 1];
		}
		case Direction.E: {
			return [x + 1, y];
		}
		case Direction.S: {
			return [x, y - 1];
		}
		case Direction.W: {
			return [x - 1, y];
		}
		default: {
			return [-1, -1];
		}
	}
};

const coordWasVisited = (
	visited: [number, number][],
	target: [number, number],
): boolean =>
	visited.some(visitedCoords => visitedCoords.toString() === target.toString());

const isPathCrossing = (path: string): boolean => {
	const visited: [number, number][] = [[0, 0]];
	for (const direction of path) {
		const next = determineNextCoords(
			visited[visited.length - 1],
			direction as Direction,
		);
		if (coordWasVisited(visited, next)) {
			return true;
		}
		visited.push(next);
	}
	return false;
};
