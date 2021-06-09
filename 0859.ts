const diffIsAndEnctrdChars = (
	a: string,
	b: string,
): [[string, string][], Set<string>] => {
	const diffIndices: [string, string][] = [];
	const encounteredChars = new Set<string>();
	for (let i = 0; i < a.length; i++) {
		const aChar = a[i];
		const bChar = b[i];
		if (aChar !== bChar) {
			diffIndices.push([aChar, bChar]);
		}
		encounteredChars.add(aChar);
	}
	return [diffIndices, encounteredChars];
};

const aIsReversedB = (a: [string, string], b: [string, string]): boolean =>
	a.join("") === b.reverse().join("");

const buddyStrings = (s: string, goal: string): boolean => {
	if (s.length === goal.length) {
		const [diffIndices, encounteredChars] = diffIsAndEnctrdChars(s, goal);
		if (diffIndices.length === 2) {
			return aIsReversedB(diffIndices[0], diffIndices[1]);
		} else if (!diffIndices.length) {
			return encounteredChars.size !== s.length;
		} else {
			return false;
		}
	}
	return false;
};
