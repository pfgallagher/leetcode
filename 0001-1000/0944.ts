function* cols(grid: string[]): Generator<string[]> {
	for (const i of Array(grid[0].length).keys()) {
		const col: string[] = [];
		for (const row of grid) {
			col.push(row[i]);
		}
		yield col;
	}
}

const minDeletionSize = (strs: string[]): number =>
	[...cols(strs)].filter(
		col =>
			!col.every((char, i, arr) => i === arr.length - 1 || char <= arr[i + 1]),
	).length;
