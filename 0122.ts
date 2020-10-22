export {};

const maxProfit = (prices: number[]): number =>
	prices.reduce(
		(profit, price, i, arr) =>
			arr[i - 1] < price ? (profit += price - arr[i - 1]) : profit,
		0,
	);
