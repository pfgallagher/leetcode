export {};

const range = (min: number, max: number): number[] =>
	Array(max - min + 1)
		.fill(0)
		.map((_, i) => i + min);

const factorial = (n: number): number =>
	n > 0 ? range(1, n).reduce((a, c) => (a *= c)) : 1;

const getRow = (rowIndex: number): number[] =>
	range(0, rowIndex).map(
		k => factorial(rowIndex) / (factorial(k) * factorial(rowIndex - k)),
	);
