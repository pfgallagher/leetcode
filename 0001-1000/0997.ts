const findJudge = (n: number, trust: number[][]): number =>
	trust
		.reduce<number[][]>(
			(acc, [trustor, trustee]) => {
				acc[trustee].push(trustor);
				return acc;
			},
			Array(n + 1)
				.fill(0)
				.map(() => []),
		)
		.findIndex(
			(trustors, trustee, trustArr) =>
				trustors.length === n - 1 &&
				trustArr.every(trustors => !trustors.includes(trustee)),
		) || 1;
