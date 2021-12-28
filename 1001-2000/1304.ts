const sumZero = (n: number): number[] => {
	const addends: number[] = [];
	for (let i = 1; i < n; i++) {
		addends.push(i);
	}
	addends.push(addends.length ? -addends.reduce((a, c) => a + c, 0) : 0);
	return addends;
};
