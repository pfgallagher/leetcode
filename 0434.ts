const countSegments = (s: string): number => {
	let count = 0;
	[...s].forEach((char, i) => {
		if (char !== " " && (!i || s[i - 1] === " ")) {
			count++;
		}
	});
	return count;
};
