export {};

const phoneMap: { [digString: string]: string[] } = {
	"2": ["a", "b", "c"],
	"3": ["d", "e", "f"],
	"4": ["g", "h", "i"],
	"5": ["j", "k", "l"],
	"6": ["m", "n", "o"],
	"7": ["p", "q", "r", "s"],
	"8": ["t", "u", "v"],
	"9": ["w", "x", "y", "z"],
};

const cartesianProduct = (arr: string[][]): string[][] =>
	arr.reduce<string[][]>(
		(acc, cur) => acc.flatMap(subAcc => cur.map(char => [...subAcc, char])),
		[[]],
	);

const letterCombinations = (digits: string): string[] =>
	cartesianProduct([...digits].map(digit => phoneMap[digit]))
		.map(prod => prod.join(""))
		.filter(el => el);

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("27")); // ["ap", "aq", "ar", "as", "bp", "bq", "br", "bs", "cp", "cq", "cr", "cs"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]
