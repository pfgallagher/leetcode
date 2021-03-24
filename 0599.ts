const findRestaurant = (list1: string[], list2: string[]): string[] => {
	const restaurantMap: { [restaurant: string]: number[] } = {};
	for (const [i, restaraunt] of [...list1, ...list2].entries()) {
		if (restaurantMap[restaraunt]) {
			restaurantMap[restaraunt].push(i);
		} else {
			restaurantMap[restaraunt] = [i];
		}
	}
	const filtered = Object.fromEntries(
		Object.entries(restaurantMap)
			.filter(([k, v]) => 2 <= v.length)
			.map(([k, v]) => [k, v.reduce((a, c) => a + c, 0)]),
	);
	const min = Math.min(...Object.values(filtered));
	return Object.entries(filtered)
		.filter(([k, v]) => v === min)
		.map(([k, v]) => k);
};
