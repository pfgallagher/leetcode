const findRelativeRanks = (score: number[]): string[] => {
	const sorted = [...score].sort((a, b) => b - a);
	return score.map(n => {
		const relativePlace = sorted.indexOf(n);
		switch (relativePlace) {
			case 0:
				return "Gold Medal";
			case 1:
				return "Silver Medal";
			case 2:
				return "Bronze Medal";
			default:
				return `${relativePlace + 1}`;
		}
	});
};
