const canMakeArithmeticProgression = (arr: number[]): boolean => {
	arr.sort((a, b) => a - b);
	let lastDiff: number | undefined;
	for (const [i, n] of arr.slice(0, -1).entries()) {
		const nextDiff = arr[i + 1] - n;
		if (lastDiff !== undefined && lastDiff !== nextDiff) {
			return false;
		} else {
			lastDiff = nextDiff;
		}
	}
	return true;
};
