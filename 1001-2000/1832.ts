const checkIfPangram = (sentence: string): boolean =>
	new Set(sentence).size === 26;
