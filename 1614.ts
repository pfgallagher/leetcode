const maxDepth = (s: string): number => {
	let max = 0;
	let curOpen = 0;
	for (const char of s) {
		if (char === "(") {
			curOpen++;
			max = Math.max(max, curOpen);
		} else if (char === ")") {
			curOpen--;
		}
	}
	return max;
};
