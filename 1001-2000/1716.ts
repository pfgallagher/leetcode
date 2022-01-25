function* iterateDeposits(n: number): Generator<number> {
	for (let i = 1, week = 1, depositAmount = 1; i <= n; i++) {
		yield depositAmount;
		depositAmount++;
		if (!(i % 7)) {
			week++;
			depositAmount = week;
		}
	}
}

const totalMoney = (n: number): number => {
	let total = 0;
	for (const deposit of iterateDeposits(n)) {
		total += deposit;
	}
	return total;
};
