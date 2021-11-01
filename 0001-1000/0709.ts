const LOWER_UPPER_OFFSET = 32;

const upperToLower = (str: string): string => {
	const charCode = str.charCodeAt(0);
	if (65 <= charCode && charCode <= 90) {
		return String.fromCharCode(charCode + LOWER_UPPER_OFFSET);
	}
	return str;
};

const toLowerCase = (str: string): string =>
	[...str].map(char => upperToLower(char)).join("");
