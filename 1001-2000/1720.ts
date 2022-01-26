const decode = (encoded: number[], first: number): number[] =>
	encoded.reduce(
		(a, c, i) => {
			a.push(a[i] ^ c);
			return a;
		},
		[first],
	);
