function* iterateWords(s: string): Generator<string> {
	let cur = "";
	for (const char of s) {
		if (char !== " ") {
			cur += char;
		} else {
			yield cur;
			cur = "";
		}
	}
	yield cur;
}

const truncateSentence = (s: string, k: number): string => {
	const wordGenerator = iterateWords(s);
	let truncated = "";
	while (k) {
		truncated += `${wordGenerator.next().value}${k !== 1 ? " " : ""}`;
		k--;
	}
	return truncated;
};
