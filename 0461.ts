const hammingDistance = (x: number, y: number): number => {
	const parsedX = x.toString(2).padStart(32, "0");
	const parsedY = y.toString(2).padStart(32, "0");
	return [...parsedX].reduce((acc, cur, i) => {
		const corresponding = parsedY[i];
		if (cur !== corresponding) {
			return acc + 1;
		}
		return acc;
	}, 0);
};
