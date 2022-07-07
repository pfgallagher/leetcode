export {};

const isAnagram = (a: string, b: string): boolean =>
	[...a].sort().join("") === [...b].sort().join("");

const removeAnagrams = (words: string[]): string[] =>
	words.filter((word, i) => !isAnagram(word, words[i - 1] ?? ""));
