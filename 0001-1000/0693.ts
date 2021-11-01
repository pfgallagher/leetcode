const hasAlternatingBits = (n: number): boolean =>
	[...n.toString(2)].every((c, i, [first]) =>
		!(i % 2) ? c === first : c !== first,
	);
