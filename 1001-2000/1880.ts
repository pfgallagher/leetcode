const numericalValue = (str: string): number =>
	parseInt([...str].map(char => char.charCodeAt(0) - 97).join(""), 10);

const isSumEqual = (
	firstWord: string,
	secondWord: string,
	targetWord: string,
): boolean =>
	numericalValue(firstWord) + numericalValue(secondWord) ===
	numericalValue(targetWord);
