const kidsWithCandies = (
	candies: number[],
	extraCandies: number,
): boolean[] => {
	const max = Math.max(...candies);
	return candies.map(count => max <= count + extraCandies);
};
