function* iterateMissingNumbers(arr: number[]): Generator<[number, number]> {
	let missingCount = 0;
	let i = 1;
	while (true) {
		if (!arr.includes(i)) {
			missingCount++;
			yield [i, missingCount];
		}
		i++;
	}
}

const findKthPositive = (arr: number[], k: number): number => {
	for (const [missingN, count] of iterateMissingNumbers(arr)) {
		if (count === k) {
			return missingN;
		}
	}
	return -1;
};
