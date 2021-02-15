const constructRectangle = (area: number): number[] => {
	for (let i = Math.floor(Math.sqrt(area)); 0 < i; i--) {
		if (!(area % i)) {
			return [area / i, i];
		}
	}
	return [-1, -1];
};
