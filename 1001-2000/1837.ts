const sumBase = (n: number, k: number): number =>
	[...n.toString(k)].reduce((a, c) => a + parseInt(c, 10), 0);
