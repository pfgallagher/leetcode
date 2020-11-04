const titleToNumber = (s: string): number =>
	[...s].map(c => c.charCodeAt(0) - 64).reduce((a, c) => a * 26 + c, 0);
