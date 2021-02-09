const islandPerimeter = (grid: number[][]): number => {
	let perimeter = 0;
	grid.forEach((row, i) => {
		row.forEach((cell, j) => {
			if (cell) {
				[
					!grid[i - 1]?.[j],
					!grid[i + 1]?.[j],
					!grid[i]?.[j - 1],
					!grid[i]?.[j + 1],
				].forEach(condition => {
					if (condition) {
						perimeter++;
					}
				});
			}
		});
	});
	return perimeter;
};
