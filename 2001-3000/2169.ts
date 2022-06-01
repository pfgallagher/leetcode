const countOperations = (num1: number, num2: number): number => {
	let opCount = 0;
	while (num1 && num2) {
		if (num2 <= num1) {
			num1 -= num2;
		} else {
			num2 -= num1;
		}
		opCount++;
	}
	return opCount;
};
