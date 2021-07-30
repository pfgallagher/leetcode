const commonChars = (words: string[]): string[] => {
	const common: string[] = [];
	words.sort((a, b) => a.length - b.length);
	let [shortest, ...rest] = words;
	for (const char of [...shortest]) {
		if (rest.every(word => word.includes(char))) {
			rest = rest.map(word => {
				const i = word.indexOf(char);
				return `${word.slice(0, i)}${word.slice(i + 1)}`;
			});
			common.push(char);
		}
	}
	return common;
};
