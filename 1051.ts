const heightChecker = (heights: number[]): number =>
	[...heights].sort((a, b) => a - b).filter((el, i) => el !== heights[i])
		.length;
