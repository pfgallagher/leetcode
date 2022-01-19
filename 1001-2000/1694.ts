const arrShifter =
	(arr: string[]) =>
	(n: number): string[] => {
		const shiftedArr: string[] = [];
		for (let i = 0; arr.length && i < n; i++) {
			shiftedArr.push(arr.shift()!);
		}
		return shiftedArr;
	};

const reformatNumber = (number: string): string => {
	const digits: string[] = [...number.replace(/\D/g, "")];
	const shiftBy = arrShifter(digits);
	const formatted: string[][] = [];
	while (4 < digits.length) {
		formatted.push(shiftBy(3));
	}
	if (digits.length === 4) {
		formatted.push(shiftBy(2), shiftBy(2));
	} else {
		formatted.push(shiftBy(digits.length));
	}
	return formatted.map(group => group.join("")).join("-");
};
