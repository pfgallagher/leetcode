const wordPattern = (pattern: string, s: string): boolean => {
	const wordMap = new Map<string, string>();
	const words = s.split(" ");
	if (pattern.length !== words.length) {
		return false;
	}
	let curWordI = 0;
	for (const char of [...pattern]) {
		const correspondingWord = words[curWordI];
		if (wordMap.has(char)) {
			if (wordMap.get(char) === correspondingWord) {
				curWordI++;
				continue;
			}
			return false;
		} else {
			wordMap.set(char, correspondingWord);
		}
		curWordI++;
	}
	return !(
		[...wordMap.values()].length !== new Set([...wordMap.values()]).size
	);
};
