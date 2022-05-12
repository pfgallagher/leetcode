const mostWordsFound = (sentences: string[]): number =>
	Math.max(...sentences.map(sentence => sentence.split(" ").length));
