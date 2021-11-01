const reverseString = (s: string[]): void => {
	for (let start = 0, end = s.length - 1; start < end; start++, end--) {
		[s[start], s[end]] = [s[end], s[start]];
	}
};
