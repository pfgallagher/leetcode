type PointMap = { [n: number]: string[] };

function* iterateRings(rings: string): Generator<[number, string]> {
	for (let i = 0; i < rings.length - 1; i += 2) {
		yield [parseInt(rings[i + 1], 10), rings[i]];
	}
}

const countPoints = (rings: string): number => {
	const pointMap: PointMap = {};
	for (const [i, color] of iterateRings(rings)) {
		if (pointMap.hasOwnProperty(i)) {
			pointMap[i].push(color);
		} else {
			pointMap[i] = [color];
		}
	}
	return Object.values(pointMap).reduce(
		(a, c) =>
			c.includes("R") && c.includes("B") && c.includes("G") ? a + 1 : a,
		0,
	);
};
