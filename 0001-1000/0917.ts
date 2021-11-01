const isLetter = (s: string): boolean => /[a-zA-Z]/.test(s);

const reverseOnlyLetters = (s: string): string => {
	const sArr = [...s];
	let start = 0;
	let end = sArr.length - 1;
	while (start <= end) {
		if (!isLetter(sArr[start])) {
			start++;
			continue;
		}
		if (!isLetter(sArr[end])) {
			end--;
			continue;
		}
		[sArr[start], sArr[end]] = [sArr[end], sArr[start]];
		start++;
		end--;
	}
	return sArr.join("");
};
