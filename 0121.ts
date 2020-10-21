const maxProfit = (prices: number[]): number => {
	let min = Infinity;
	let profit = 0;
	for (const price of prices) {
		if (price < min) {
			min = price;
		} else if (profit < price - min) {
			profit = price - min;
		}
	}
	return profit;
};
