export {};

// const isPalindrome = (s: string): boolean => {
// 	const charArr = [...s.toLowerCase()].filter(char => /[a-z0-9]/.test(char));
// 	return charArr.join("") === charArr.reverse().join("");
// };

const isCharAlphaNumeric = (char: string): boolean => /[a-z0-9]/.test(char);

const isPalindrome = (s: string): boolean => {
	const lowerCaseS = s.toLowerCase();
	let start = 0;
	let end = s.length - 1;
	while (start < end) {
		const startChar = lowerCaseS[start];
		if (!isCharAlphaNumeric(startChar)) {
			start++;
			continue;
		}
		const endChar = lowerCaseS[end];
		if (!isCharAlphaNumeric(endChar)) {
			end--;
			continue;
		}
		if (startChar !== endChar) {
			return false;
		}
		start++;
		end--;
	}
	return true;
};
