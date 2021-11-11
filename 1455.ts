const isPrefixOfWord = (sentence: string, searchWord: string): number => {
	const targetI = sentence.split(" ").findIndex(w => w.startsWith(searchWord));
	return targetI !== -1 ? targetI + 1 : targetI;
};
