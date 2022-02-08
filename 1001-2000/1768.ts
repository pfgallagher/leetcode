function* zip(str1: string, str2: string): Generator<string> {
	const maxLength = Math.max(str1.length, str2.length);
	for (let i = 0; i < maxLength; i++) {
		const char1 = str1[i];
		if (char1) {
			yield char1;
		}
		const char2 = str2[i];
		if (char2) {
			yield char2;
		}
	}
}

const mergeAlternately = (word1: string, word2: string): string => {
	let merged = "";
	for (const char of zip(word1, word2)) {
		merged += char;
	}
	return merged;
};
