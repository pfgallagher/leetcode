// 1337code!

const rowStrength = (row: number[]): number => {
	let strength = 0;
	for (const person of row) {
		if (person) {
			strength++;
		} else {
			return strength;
		}
	}
	return strength;
};

const kWeakestRows = (mat: number[][], k: number): number[] =>
	(mat.map((row, i) => [row, i]) as [number[], number][])
		.sort(([a], [b]) => rowStrength(a) - rowStrength(b))
		.map(([_, i]) => i)
		.slice(0, k);
