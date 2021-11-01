// const isPalindrome = (x: number): boolean =>
// 	x.toString() === [...x.toString()].reverse().join("");

const nLength = (x: number): number => Math.ceil(Math.log10(x + 1));

const getDigAtI = (x: number, i: number): number =>
	Math.floor((x / 10 ** (nLength(x) - i - 1)) % 10);

const isPalindrome = (x: number): boolean => {
	if (x < 0) {
		return false;
	}
	for (let start = 0, end = nLength(x) - 1; start <= end; start++, end--) {
		if (getDigAtI(x, start) !== getDigAtI(x, end)) {
			return false;
		}
	}
	return true;
};
