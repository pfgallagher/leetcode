const getOccurrenceIndices = (word: string, target: string): number[] => {
	const indices: number[] = [];
	[...word].forEach((char, i) => {
		if (char === target) {
			indices.push(i);
		}
	});
	return indices;
};

const uniqueLetters = (word: string): string[] => [...new Set([...word])];

const isIsomorphic = (s: string, t: string): boolean =>
	JSON.stringify(
		uniqueLetters(s).map(target => getOccurrenceIndices(s, target)),
	) ===
	JSON.stringify(
		uniqueLetters(t).map(target => getOccurrenceIndices(t, target)),
	);
