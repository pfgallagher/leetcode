const detectCapitalUse = (word: string): boolean =>
	/^[A-Z]+$|^[a-z]+$|^[A-Z]{1}[a-z]*$/.test(word);
