const maximumWealth = (accounts: number[][]): number =>
	Math.max(...accounts.map(account => account.reduce((a, c) => a + c, 0)));
