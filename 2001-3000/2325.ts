const keyToSubstitutionTable = (
	key: string,
): {
	[char: string]: string;
} => {
	const charSet = new Set<string>();
	for (const char of key) {
		if (char !== " ") {
			charSet.add(char);
		}
	}
	return Object.fromEntries(
		[...charSet].map((char, i) => [char, String.fromCharCode(97 + i)]),
	);
};

const decodeMessage = (key: string, message: string): string => {
	const table = keyToSubstitutionTable(key);
	let decoded = "";
	for (const char of message) {
		decoded += table[char] ?? " ";
	}
	return decoded;
};
