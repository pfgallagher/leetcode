const minTimeToVisitAllPoints = (points: number[][]): number =>
	points.reduce((acc, [x1, y1], i, arr) => {
		if (i !== arr.length - 1) {
			const [x2, y2] = arr[i + 1];
			return acc + Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
		}
		return acc;
	}, 0);
