const fillCups = (amount: [number, number, number]): number => {
	let time = 0;
	const sort = () => {
		amount.sort((a, b) => b - a);
	};
	sort();
	while (amount[0]) {
		amount[0]--;
		amount[1]--;
		time++;
		sort();
	}
	return time;
};
