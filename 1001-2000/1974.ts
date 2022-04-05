const minDistance = (a: string, b: string): number => {
	const d = Math.abs(b.charCodeAt(0) - a.charCodeAt(0));
	return Math.min(d, 26 - d);
};

const minTimeToType = (word: string): number => {
	let time = word.length; // initialized with time spent typing
	for (let i = 0; i < word.length; i++) {
		time += minDistance(word[i], word[i - 1] ?? "a"); // time spent moving
	}
	return time;
};
