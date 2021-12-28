const freqAlphabets = (s: string): string =>
	s
		.match(/\d{2}(?=#)|\d/g)!
		.map(n => String.fromCharCode(parseInt(n, 10) + 96))
		.join("");
