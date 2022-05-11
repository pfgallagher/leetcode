export {};

const isPalindrome = (s: string): boolean => {
	for (let start = 0, end = s.length - 1; start < end; start++, end--) {
		if (s[start] !== s[end]) {
			return false;
		}
	}
	return true;
};

const firstPalindrome = (words: string[]): string =>
	words.find(word => isPalindrome(word)) ?? "";
