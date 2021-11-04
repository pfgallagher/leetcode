const destCity = (paths: string[][]): string => {
	const pathObj = Object.fromEntries(paths);
	let lastCity = paths[0][0];
	while (true) {
		const curCity = pathObj[lastCity];
		if (curCity === undefined) {
			return lastCity;
		}
		lastCity = curCity;
	}
};
