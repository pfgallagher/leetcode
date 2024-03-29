const checkXMatrix = (grid: number[][]): boolean => {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			if (i === j || i === grid.length - 1 - j) {
				if (!grid[i][j]) {
					return false;
				}
			} else if (grid[i][j]) {
				return false;
			}
		}
	}
	return true;
};
