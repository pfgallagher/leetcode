const countBits = (n: number): number => {
	let count = 0;
	for (const dig of n.toString(2)) {
		if (dig === "1") {
			count++;
		}
	}
	return count;
};

const sortByBits = (arr: number[]): number[] =>
	arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
