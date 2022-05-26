const findFinalValue = (nums: number[], original: number): number => {
	while (true) {
		if (nums.includes(original)) {
			original *= 2;
		} else {
			break;
		}
	}
	return original;
};
