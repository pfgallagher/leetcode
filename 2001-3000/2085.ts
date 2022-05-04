interface WordFreq {
	[word: string]: number;
}

const wordFrequency = (words: string[]): WordFreq => {
	const wordFreq: WordFreq = {};
	for (const word of words) {
		if (wordFreq.hasOwnProperty(word)) {
			wordFreq[word]++;
		} else {
			wordFreq[word] = 1;
		}
	}
	return wordFreq;
};

const countWords = (words1: string[], words2: string[]): number => {
	const freq1 = wordFrequency(words1);
	const freq2 = wordFrequency(words2);
	return Object.keys(freq1).filter(
		word => freq1[word] === 1 && freq2[word] === 1,
	).length;
};
