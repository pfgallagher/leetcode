const countNegatives = (grid: number[][]): number => {
	let count = 0;
	for (const row of grid) {
		for (let i = row.length - 1; 0 <= i; i--) {
			if (row[i] < 0) {
				count++;
			} else {
				break;
			}
		}
	}
	return count;
};
