export {};

const intersection = (nums1: number[], nums2: number[]): number[] => [
	...new Set(
		nums1.filter(
			n => nums2.includes(n),
			nums2.filter(n => nums1.includes(n)),
		),
	),
];

function* iterateColumns(matrix: number[][]): Generator<number[]> {
	for (const i of Array(matrix[0].length).keys()) {
		const col: number[] = [];
		for (const row of matrix) {
			col.push(row[i]);
		}
		yield col;
	}
}

const luckyNumbers = (matrix: number[][]): number[] =>
	intersection(
		matrix.map(row => Math.min(...row)),
		[...iterateColumns(matrix)].map(col => Math.max(...col)),
	);
