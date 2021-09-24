const replaceElements = (arr: number[]): number[] => {
	const replaced: number[] = [];
	while (arr.length - 1) {
		arr.shift();
		replaced.push(Math.max(...arr));
	}
	replaced.push(-1);
	return replaced;
};
