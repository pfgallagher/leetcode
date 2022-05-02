const timeRequiredToBuy = (tickets: number[], k: number): number => {
	let time = 0;
	while (tickets[k]) {
		for (let i = 0; tickets[k] && i < tickets.length; i++) {
			if (tickets[i]) {
				time++;
				tickets[i]--;
			}
		}
	}
	return time;
};
