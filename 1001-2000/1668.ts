const maxRepeating = (sequence: string, word: string): number => {
	let i = Math.floor(sequence.length / word.length);
	while (0 < i) {
		if (new RegExp(word.repeat(i)).test(sequence)) {
			return i;
		}
		i--;
	}
	return 0;
};
