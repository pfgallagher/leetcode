type CharMap = {
	[char: string]: number;
};

const countChars = (str: string): CharMap => {
	const charMap: CharMap = {};
	for (const char of [...str]) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	return charMap;
};

const canConstruct = (ransomNote: string, magazine: string): boolean => {
	const ransomMap = countChars(ransomNote);
	const magMap = countChars(magazine);
	return Object.keys(ransomMap).every(key => ransomMap[key] <= magMap[key]);
};
