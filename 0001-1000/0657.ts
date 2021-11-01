const judgeCircle = (moves: string): boolean => {
	const movesMap: {
		[char: string]: number;
		U: number;
		D: number;
		L: number;
		R: number;
	} = {
		U: 0,
		D: 0,
		L: 0,
		R: 0,
	};
	for (const move of [...moves]) {
		movesMap[move]++;
	}
	return movesMap.U === movesMap.D && movesMap.L === movesMap.R;
};
