const findLUSlength = (a: string, b: string): number =>
	a === b ? -1 : Math.max(a.length, b.length);
