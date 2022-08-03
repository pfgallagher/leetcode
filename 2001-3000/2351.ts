const repeatedCharacter = (s: string): string => {
	const set = new Set<string>();
	for (const char of s) {
		if (set.has(char)) {
			return char;
		}
		set.add(char);
	}
	return "";
};
