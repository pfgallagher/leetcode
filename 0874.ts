enum Directions {
	n = "n",
	s = "s",
	e = "e",
	w = "w",
}

const leftMap: { [direction in Directions]: Directions } = {
	[Directions.n]: Directions.w,
	[Directions.s]: Directions.e,
	[Directions.e]: Directions.n,
	[Directions.w]: Directions.s,
};

const rightMap: { [direction in Directions]: Directions } = {
	[Directions.n]: Directions.e,
	[Directions.s]: Directions.w,
	[Directions.e]: Directions.s,
	[Directions.w]: Directions.n,
};

const robotSim = (commands: number[], obstacles: number[][]): number => {
	let coords = [0, 0];
	let curDirection = Directions.n;
	let max = 0;
	for (const command of commands) {
		if (command === -2) {
			curDirection = leftMap[curDirection];
		} else if (command === -1) {
			curDirection = rightMap[curDirection];
		} else {
			for (let i = 0; i < command; i++) {
				const newCoords = [...coords];
				if (curDirection === Directions.n) {
					newCoords[1]++;
				} else if (curDirection === Directions.s) {
					newCoords[1]--;
				} else if (curDirection === Directions.e) {
					newCoords[0]++;
				} else if (curDirection === Directions.w) {
					newCoords[0]--;
				}
				if (
					obstacles.every(
						obstacle =>
							newCoords[0] !== obstacle[0] || newCoords[1] !== obstacle[1],
					)
				) {
					coords = newCoords;
					max = Math.max(max, coords[0] ** 2 + coords[1] ** 2);
				}
			}
		}
	}
	return max;
};
