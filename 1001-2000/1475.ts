const finalPrices = (prices: number[]): number[] =>
	prices.map(
		(price, i, arr) =>
			price -
			(arr.find(
				(targetPrice, targetI) => i < targetI && targetPrice <= price,
			) || 0),
	);
