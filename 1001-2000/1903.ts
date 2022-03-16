const largestOddNumber = (numStr: string): string => {
	const oddDigits = ["1", "3", "5", "7", "9"];
	for (let i = numStr.length - 1; 0 <= i; i--) {
		if (oddDigits.includes(numStr[i])) {
			return numStr.slice(0, i + 1);
		}
	}
	return "";
};
