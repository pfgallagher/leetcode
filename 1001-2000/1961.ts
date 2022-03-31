const isPrefixString = (s: string, words: string[]): boolean => {
	let testStr = "";
	for (const word of words) {
		testStr += word;
		if (s.length <= testStr.length) {
			break;
		}
	}
	return s === testStr;
};
