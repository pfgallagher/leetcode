function* iterateBy2(n: number, start: number): Generator<number> {
	for (let i = 0; i < n; i++) {
		yield start + 2 * i;
	}
}

const xorOperation = (n: number, start: number): number => {
	const iterator = iterateBy2(n, start);
	let result = iterator.next().value;
	for (const num of iterator) {
		result ^= num;
	}
	return result;
};
