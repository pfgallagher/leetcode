export {};

const countSpaces = (text: string): number => {
	let count = 0;
	for (const char of text) {
		if (char === " ") {
			count++;
		}
	}
	return count;
};

const divmod = (a: number, b: number): [number, number] => [
	Math.floor(a / b),
	a % b,
];

const textToWords = (text: string): string[] =>
	text.split(" ").filter(word => word);

const spaceStr = (n: number): string => " ".repeat(n);

const reorderSpaces = (text: string): string => {
	const words = textToWords(text);
	const spaceCount = countSpaces(text);
	if (1 < words.length) {
		const [div, mod] = divmod(spaceCount, words.length - 1);
		return `${words.join(spaceStr(div))}${spaceStr(mod)}`;
	}
	return `${words.join(" ")}${spaceStr(spaceCount)}`;
};
