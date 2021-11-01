const licenseKeyFormatting = (S: string, K: number): string =>
	[...S.toUpperCase().replace(/-/g, "")]
		.reduceRight<string[][]>(
			(acc, cur) => {
				if (acc[0].length === K) {
					acc.unshift([]);
				}
				acc[0].unshift(cur);
				return acc;
			},
			[[]],
		)
		.map(group => group.join(""))
		.join("-");
