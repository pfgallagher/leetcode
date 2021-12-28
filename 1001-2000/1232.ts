export {};

type CoordinatePair = [number, number];

const slope = ([x1, y1]: CoordinatePair, [x2, y2]: CoordinatePair): number =>
	(y2 - y1) / (x2 - x1);

const checkStraightLine = (coordinates: CoordinatePair[]): boolean => {
	const slopes: number[] = [];
	for (let i = 0; i < coordinates.length; i++) {
		const [a, b] = coordinates.slice(i, i + 2);
		if (a && b) {
			let curSlope = slope(a, b);
			if (curSlope === -Infinity) {
				curSlope = Infinity;
			}
			slopes.push(curSlope);
		}
	}
	return new Set(slopes).size === 1;
};
