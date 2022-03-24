const canBeTypedWords = (text: string, brokenLetters: string): number => {
	const brokenChars = [...brokenLetters];
	return text
		.split(" ")
		.filter(word => brokenChars.every(brokenChar => !word.includes(brokenChar)))
		.length;
};
