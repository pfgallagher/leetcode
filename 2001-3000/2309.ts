const greatestLetter = (s: string): string => {
	const charSet = new Set(s);
	for (let i = 90; 65 <= i; i--) {
		const upper = String.fromCharCode(i);
		if (charSet.has(upper) && charSet.has(upper.toLowerCase())) {
			return upper;
		}
	}
	return "";
};
