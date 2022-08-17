export {};

const longestPalindrome = (s: string): string => {
	const expand = (l: number, r: number): string => {
		while (0 <= l && r < s.length && s[l] === s[r]) {
			l--;
			r++;
		}
		return s.slice(l + 1, r);
	};
	let longest = "";
	for (let i = 0; i < s.length; i++) {
		const odd = expand(i, i);
		const even = expand(i, i + 1);
		const subLongest = odd.length < even.length ? even : odd;
		longest = subLongest.length < longest.length ? longest : subLongest;
	}
	return longest;
};
