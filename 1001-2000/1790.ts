const countDiff = (s1: string, s2: string): number =>
	[...s1].reduce((a, c, i) => (c === s2[i] ? a : a + 1), 0);

const sortStr = (str: string): string =>
	[...str].sort((a, b) => (a < b ? -1 : b < a ? 1 : 0)).join("");

const haveSameChars = (s1: string, s2: string): boolean =>
	sortStr(s1) === sortStr(s2);

const areAlmostEqual = (s1: string, s2: string): boolean => {
	const diffCount = countDiff(s1, s2);
	return diffCount === 0 || (diffCount === 2 && haveSameChars(s1, s2));
};
