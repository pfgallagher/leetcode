const firstUniqChar = (s: string): number => {
	for (const [i, char] of [...s].entries()) {
		if (i === s.indexOf(char) && i === s.lastIndexOf(char)) {
			return i;
		}
	}
	return -1;
};
