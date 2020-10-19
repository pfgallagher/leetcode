export {};

const range = (min: number, max: number): number[] =>
	Array(max - min + 1)
		.fill(0)
		.map((_, i) => i + min);

const factorial = (n: number): number =>
	n > 0 ? range(1, n).reduce((a, c) => (a *= c)) : 1;

const pascalTriangleRow = (n: number): number[] =>
	range(0, n).map(k => factorial(n) / (factorial(k) * factorial(n - k)));

const generate = (numRows: number): number[][] =>
	range(0, numRows - 1).map(row => pascalTriangleRow(row));
