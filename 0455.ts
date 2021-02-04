const findContentChildren = (g: number[], s: number[]): number => {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);
	let counter = 0;
	for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
		if (g[i] <= s[j]) {
			counter++;
		} else {
			i--;
		}
	}
	return counter;
};
