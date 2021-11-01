const reverseWords = (s: string): string =>
	s
		.split(" ")
		.map(word => [...word].reverse().join(""))
		.join(" ");
