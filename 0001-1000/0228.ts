const summaryRanges = (nums: number[]): string[] => {
	const ranges: number[][] = [];
	for (const num of nums) {
		const last = ranges[ranges.length - 1];
		if (last?.length && num === last[last.length - 1] + 1) {
			last.push(num);
		} else {
			ranges.push([num]);
		}
	}
	return ranges.map(
		range =>
			`${range[0]}${2 <= range.length ? `->${range[range.length - 1]}` : ""}`,
	);
};
