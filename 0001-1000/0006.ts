const convert = (s: string, numRows: number): string => {
	if (numRows === 1) {
		return s;
	}
	const rows: string[][] = Array(Math.min(numRows, s.length))
		.fill("")
		.map(() => []);
	let curRow = 0;
	let goingDown = false;
	for (const char of s) {
		if (!curRow || curRow === numRows - 1) {
			goingDown = !goingDown;
		}
		rows[curRow].push(char);
		curRow += goingDown ? 1 : -1;
	}
	return rows.map(row => row.join("")).join("");
};
