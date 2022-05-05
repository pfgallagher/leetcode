const targetIndices = (nums: number[], target: number): number[] =>
	nums
		.sort((a, b) => a - b)
		.reduce<number[]>((a, c, i) => {
			if (c === target) {
				a.push(i);
			}
			return a;
		}, []);
