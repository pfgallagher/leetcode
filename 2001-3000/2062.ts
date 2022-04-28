export {};

const vowels = ["a", "e", "i", "o", "u"];
const onlyVowelsRegExp = new RegExp(`^[${vowels.join("")}]+$`);

const isVowelSubstring = (word: string): boolean =>
	vowels.every(vowel => word.includes(vowel)) && onlyVowelsRegExp.test(word);

const countVowelSubstrings = (word: string): number => {
	let counter = 0;
	for (let i = 0; i < word.length; i++) {
		for (let j = i; j <= word.length; j++) {
			if (isVowelSubstring(word.slice(i, j))) {
				counter++;
			}
		}
	}
	return counter;
};
