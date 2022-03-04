const sortSentence = (s: string): string =>
	s
		.split(" ")
		.reduce<string[]>((a, c) => {
			a[parseInt(c.slice(-1), 10) - 1] = c.slice(0, -1);
			return a;
		}, [])
		.join(" ");
