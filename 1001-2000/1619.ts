const trimMean = (arr: number[]): number => {
	arr.sort((a, b) => a - b);
	const numToRemove = Math.floor(arr.length * 0.05);
	const trimmed = arr.slice(numToRemove).slice(0, -numToRemove);
	return trimmed.reduce((a, c) => a + c, 0) / trimmed.length;
};
