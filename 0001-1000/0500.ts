const findWords = (words: string[]): string[] => {
	const rowMap: { [char: string]: number } = {};
	["qwertyuiop", "asdfghjkl", "zxcvbnm"].forEach((row, i) => {
		[...row].forEach(char => {
			rowMap[char] = i;
		});
	});
	return words.filter(
		word =>
			new Set([...word].map(char => rowMap[char.toLowerCase()])).size === 1,
	);
};
