const removeDigit = (number: string, digit: string): string => {
	let max = "";
	for (let i = 0; i < number.length; i++) {
		if (number[i] === digit) {
			const removed = `${number.slice(0, i)}${number.slice(i + 1)}`;
			if (max < removed) {
				max = removed;
			}
		}
	}
	return max;
};

// Interestingly, 'properly' parsing the strings as numbers caused all sorts of errors. String comparison, it is, then, I guess!
