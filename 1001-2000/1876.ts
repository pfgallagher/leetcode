const isGood = (s: string): boolean =>
	s[0] !== s[1] && s[0] !== s[2] && s[1] !== s[2];

const countGoodSubstrings = (s: string): number => {
	let goodCount = 0;
	for (let i = 0; i < s.length - 2; i++) {
		const substring = s.slice(i, i + 3);
		if (isGood(substring)) {
			goodCount++;
		}
	}
	return goodCount;
};
