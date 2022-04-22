const areNumbersAscending = (s: string): boolean =>
	(s.match(/\d+/g)?.map(nStr => Number.parseInt(nStr, 10)) ?? []).every(
		(n, i, arr) => (arr[i - 1] ?? -Infinity) < n,
	);
