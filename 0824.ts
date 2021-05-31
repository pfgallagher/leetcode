const vowels = [..."aeiouAEIOU"];

const toGoatLatin = (sentence: string): string =>
	sentence
		.split(" ")
		.map(
			(word, i) =>
				`${
					!vowels.includes(word[0]) ? `${word.slice(1)}${word[0]}` : word
				}ma${"a".repeat(i + 1)}`,
		)
		.join(" ");
