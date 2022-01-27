const countGoodRectangles = (rectangles: number[][]): number => {
	const squareLengths = rectangles.map(sideLengths => Math.min(...sideLengths));
	const maxLength = Math.max(...squareLengths);
	return squareLengths.reduce((a, c) => (c === maxLength ? ++a : a), 0);
};
