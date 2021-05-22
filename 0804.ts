const morseArr = [
	".-",
	"-...",
	"-.-.",
	"-..",
	".",
	"..-.",
	"--.",
	"....",
	"..",
	".---",
	"-.-",
	".-..",
	"--",
	"-.",
	"---",
	".--.",
	"--.-",
	".-.",
	"...",
	"-",
	"..-",
	"...-",
	".--",
	"-..-",
	"-.--",
	"--..",
];

const uniqueMorseRepresentations = (words: string[]): number =>
	new Set(
		words.map(word =>
			[...word].map(char => morseArr[char.charCodeAt(0) - 97]).join(""),
		),
	).size;
