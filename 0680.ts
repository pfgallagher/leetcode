export {};

const isPalindrome = (s: string, i: number, j: number): boolean => {
	while (i < j) {
		if (s[i] !== s[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
};

const validPalindrome = (s: string): boolean => {
	for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
		if (s[i] !== s[j]) {
			return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
		}
	}
	return true;
};
