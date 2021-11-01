const numSpecialEquivGroups = (words: string[]): number => {
	const equivGroups = new Set<string>();
	for (const word of words) {
		const charCounts = [new Array(26).fill(0), new Array(26).fill(0)];
		for (let i = 0; i < word.length; i++) {
			charCounts[i % 2][word[i].charCodeAt(0) - 97]++;
		}
		equivGroups.add(`${charCounts[0]}${charCounts[1]}`);
	}
	return equivGroups.size;
};
