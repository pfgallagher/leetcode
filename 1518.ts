const waterBottleDivmod = (a: number, b: number): [number, number] => [
	Math.floor(a / b),
	a % b,
];

const numWaterBottles = (numBottles: number, numExchange: number): number => {
	let count = numBottles;
	while (numExchange <= numBottles) {
		const [div, mod] = waterBottleDivmod(numBottles, numExchange);
		count += div;
		numBottles = div + mod;
	}
	return count;
};
