const matchingNeighbors = (
	image: number[][],
	r: number,
	c: number,
): [number, number][] =>
	([
		[r, c - 1],
		[r, c + 1],
		[r - 1, c],
		[r + 1, c],
	] as [number, number][]).filter(
		([row, column]) => image?.[row]?.[column] === image[r][c],
	);

const floodFill = (
	image: number[][],
	sr: number,
	sc: number,
	newColor: number,
): number[][] => {
	const matches: string[] = [];
	let queue: [number, number][] = [[sr, sc]];
	while (queue.length) {
		queue = queue.filter(coords => !matches.includes(coords.toString()));
		matches.push(...queue.map(coordPair => coordPair.toString()));
		for (const [r, c] of [...queue]) {
			queue.push(...matchingNeighbors(image, r, c));
		}
	}
	for (const [r, c] of matches.map(match =>
		match.split(",").map(coord => parseInt(coord, 10)),
	)) {
		image[r][c] = newColor;
	}
	return image;
};
