const countBinarySubstrings = (s: string): number => {
	const matches = (s.match(/([01])\1*/g) || []).map(m => m.length);
	const offset = matches.slice(1);
	return matches.reduce(
		(a, c, i) => (offset[i] !== undefined ? a + Math.min(c, offset[i]) : a),
		0,
	);
};
