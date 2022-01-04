const canFormArray = (arr: number[], pieces: number[][]): boolean => {
	const formed = arr
		.flatMap(n => pieces.find(([first]) => first === n))
		.filter(n => n !== undefined);
	return arr.every((n, i) => n === formed[i]);
};
