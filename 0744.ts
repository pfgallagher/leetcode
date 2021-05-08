const nextGreatestLetter = (letters: string[], target: string): string => {
	if (letters[letters.length - 1] <= target) {
		return letters[0];
	}
	for (const letter of letters) {
		if (target < letter) {
			return letter;
		}
	}
	return "";
};
