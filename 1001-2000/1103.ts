export {};

const distributeCandies = (candies: number, numPeople: number): number[] => {
	const distribution = Array(numPeople).fill(0);
	let i = 1;
	while (0 < candies) {
		distribution[(i - 1) % numPeople] += Math.min(i, candies);
		candies -= i++;
	}
	return distribution;
};
