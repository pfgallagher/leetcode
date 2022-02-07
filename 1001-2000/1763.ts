const isNice = (s: string): boolean =>
	[...new Set(s.toLowerCase())].every(
		uniqueChar =>
			s.includes(uniqueChar) && s.includes(uniqueChar.toUpperCase()),
	);

function* iterateNiceSubstrings(s: string): Generator<string> {
	for (let start = 0; start < s.length; start++) {
		for (let end = start + 1; end <= s.length; end++) {
			const substring = s.slice(start, end);
			if (isNice(substring)) {
				yield substring;
			}
		}
	}
}

const longestNiceSubstring = (s: string): string => {
	let longest = "";
	for (const niceSubstring of iterateNiceSubstrings(s)) {
		if (longest.length < niceSubstring.length) {
			longest = niceSubstring;
		}
	}
	return longest;
};
