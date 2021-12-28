export {};

type CoordinatePair = [number, number];

const slope = ([x1, y1]: CoordinatePair, [x2, y2]: CoordinatePair): number =>
	(y2 - y1) / (x2 - x1);

const areSlopesValid = (points: CoordinatePair[]): boolean =>
	slope(points[0], points[1]) !== slope(points[1], points[2]);

const arePointsValid = (points: CoordinatePair[]): boolean => {
	const xs = new Set<number>();
	const ys = new Set<number>();
	const pairs = new Set<string>();
	for (const [x, y] of points) {
		xs.add(x);
		ys.add(y);
		pairs.add(`${x},${y}`);
	}
	return xs.size !== 1 && ys.size !== 1 && pairs.size === 3;
};

const isBoomerang = (points: CoordinatePair[]): boolean =>
	arePointsValid(points) && areSlopesValid(points);
