const hasValidPunctuation = (possibleToken: string): boolean => {
	const punctuationMatches = possibleToken.match(/[!.,]/g) ?? [];
	switch (punctuationMatches.length) {
		case 0:
			return true;
		case 1:
			if (possibleToken[possibleToken.length - 1] === punctuationMatches[0]) {
				return true;
			}
		default:
			return false;
	}
};

const hasValidHyphens = (possibleToken: string): boolean => {
	const hyphenMatches = possibleToken.match(/-/g) ?? [];
	switch (hyphenMatches.length) {
		case 0:
			return true;
		case 1:
			if (/\w-\w/.test(possibleToken)) {
				return true;
			}
		default:
			return false;
	}
};

const hasNoDigits = (possibleToken: string): boolean =>
	!/\d/.test(possibleToken);

const countValidWords = (sentence: string): number | any =>
	sentence
		.split(/\s+/g)
		.filter(
			token =>
				token &&
				hasNoDigits(token) &&
				hasValidPunctuation(token) &&
				hasValidHyphens(token),
		).length;
