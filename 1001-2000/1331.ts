const arrayRankTransform = (arr: number[]): number[] => {
	const sortedAndDeduped = [...new Set([...arr].sort((a, b) => a - b))];
	return arr.map(n => sortedAndDeduped.indexOf(n) + 1);
};
