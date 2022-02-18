const numDifferentIntegers = (word: string): number =>
	new Set(word.match(/\d+/g)?.map(nStr => BigInt(nStr))).size;
