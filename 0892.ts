const surfaceArea = (grid: number[][]): number => {
	let area = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			const cur = grid[i][j];
			if (cur) {
				area += cur * 4 + 2;
			}
			if (i) {
				area -= Math.min(grid[i - 1][j], cur) * 2;
			}
			if (j) {
				area -= Math.min(grid[i][j - 1], cur) * 2;
			}
		}
	}
	return area;
};
