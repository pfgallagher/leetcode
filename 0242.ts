// const sortedCharStr = (w: string): string =>
// 	JSON.stringify([...w].sort((a, b) => (a < b ? -1 : 1)));

// const isAnagram = (s: string, t: string): boolean =>
// 	sortedCharStr(s) === sortedCharStr(t);

const getCharCode = (c: string): number => c.charCodeAt(0) - "a".charCodeAt(0);

const isAnagram = (s: string, t: string): boolean => {
	if (s.length !== t.length) {
		return false;
	}
	const charArr = new Array(26).fill(0);
	for (const char of [...s]) {
		charArr[getCharCode(char)]++;
	}
	for (const char of [...t]) {
		charArr[getCharCode(char)]--;
		if (charArr[getCharCode(char)] < 0) {
			return false;
		}
	}
	return true;
};
