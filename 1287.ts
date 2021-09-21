function* iterateByCount(arr: number[]): Generator<[number, number]> {
	let count = 0;
	let last = arr[0];
	for (const n of arr) {
		if (n !== last) {
			yield [last, count];
			count = 0;
			last = n;
		}
		count++;
	}
	yield [last, count];
}

const findSpecialInteger = (arr: number[]): number => {
	for (const [n, count] of iterateByCount(arr)) {
		if (0.25 < count / arr.length) {
			return n;
		}
	}
	return -1;
};
