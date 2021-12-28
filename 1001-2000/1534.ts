function* iterateTriplets(arr: number[]): Generator<[number, number, number]> {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				yield [arr[i], arr[j], arr[k]];
			}
		}
	}
}

const createTripletChecker =
	(a: number, b: number, c: number) =>
	([f, s, t]: [number, number, number]): boolean =>
		Math.abs(f - s) <= a && Math.abs(s - t) <= b && Math.abs(f - t) <= c;

const countGoodTriplets = (
	arr: number[],
	a: number,
	b: number,
	c: number,
): number => {
	let count = 0;
	const isTripletGood = createTripletChecker(a, b, c);
	for (const triplet of iterateTriplets(arr)) {
		if (isTripletGood(triplet)) {
			count++;
		}
	}
	return count;
};
