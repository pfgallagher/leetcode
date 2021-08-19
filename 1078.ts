const findOcurrences = (
	text: string,
	first: string,
	second: string,
): string[] =>
	text.match(new RegExp(`(?<=\\b${first} ${second} )\\w+`, "g")) || [];
