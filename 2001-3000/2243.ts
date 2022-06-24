export {};

const splitSumAndConcat = (s: string, size: number): string => {
	const groups: number[][] = [[]];
	for (const char of s) {
		const last = groups[groups.length - 1];
		const n = Number.parseInt(char, 10);
		if (last.length < size) {
			last.push(n);
		} else {
			groups.push([n]);
		}
	}
	return groups.map(group => group.reduce((a, c) => a + c, 0)).join("");
};

const digitSum = (s: string, k: number): string => {
	while (k < s.length) {
		s = splitSumAndConcat(s, k);
	}
	return s;
};
