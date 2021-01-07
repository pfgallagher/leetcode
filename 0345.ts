const reverseVowels = (s: string): string => {
	let vowels = ["a", "e", "i", "o", "u"];
	vowels = vowels.concat(vowels.map(char => char.toUpperCase()));
	const str = [...s];
	let start = 0;
	let end = str.length - 1;
	while (start < end) {
		if (!vowels.includes(str[start])) {
			start++;
			continue;
		}
		if (!vowels.includes(str[end])) {
			end--;
			continue;
		}
		[str[start], str[end]] = [str[end], str[start]];
		start++;
		end--;
	}
	return str.join("");
};
