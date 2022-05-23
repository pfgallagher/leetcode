const minimumCost = (cost: number[]): number => {
	cost.sort((a, b) => b - a);
	let minCost = 0;
	while (cost.length) {
		const [a = 0, b = 0, c, ...rest] = cost;
		minCost += a + b;
		cost = rest;
	}
	return minCost;
};
