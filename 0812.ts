const calculateTriangleArea = ([[x1, y1], [x2, y2], [x3, y3]]: [
	[number, number],
	[number, number],
	[number, number],
]): number =>
	Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));

const largestTriangleArea = (points: [number, number][]): number => {
	let max = 0;
	for (let i = 0; i < points.length; i++) {
		for (let j = i + 1; j < points.length; j++) {
			for (let k = j + 1; k < points.length; k++) {
				max = Math.max(
					max,
					calculateTriangleArea([points[i], points[j], points[k]]),
				);
			}
		}
	}
	return max;
};
