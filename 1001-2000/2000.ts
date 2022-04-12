const reversePrefix = (word: string, ch: string): string => {
	const i = word.indexOf(ch) + 1;
	return i
		? `${[...word.slice(0, i)].reverse().join("")}${word.slice(i)}`
		: word;
};
