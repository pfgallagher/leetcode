const construct2DArray = (
	original: number[],
	m: number,
	n: number,
): number[][] =>
	original.length === m * n
		? original.reduce<number[][]>(
				(acc, cur) => {
					const prev = acc[acc.length - 1];
					if (prev.length < n) {
						prev.push(cur);
					} else {
						acc.push([cur]);
					}
					return acc;
				},
				[[]],
		  )
		: [];
