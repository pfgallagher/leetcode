const gcdOfStrings = (str1: string, str2: string): string =>
	str1 === str2
		? str1
		: `${str1}${str2}` !== `${str2}${str1}`
		? ""
		: str1.length < str2.length
		? gcdOfStrings(str2.slice(str1.length), str1)
		: gcdOfStrings(str1.slice(str2.length), str2);
