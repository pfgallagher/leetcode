const readDigits = (s: string): string => {
	let digits = "";
	if (s[0] === "+" || s[0] === "-") {
		s = s.slice(1);
	}
	for (const char of s) {
		if (/\d/.test(char)) {
			digits += char;
		} else {
			break;
		}
	}
	return digits || "0";
};

const clamp = (min: number, max: number, n: number): number =>
	n < min ? min : max < n ? max : n;

const myAtoi = (s: string): number => {
	s = s.trim();
	const converted = Number.parseInt(readDigits(s));
	return clamp((-2) ** 31, 2 ** 31 - 1, s[0] === "-" ? -converted : converted);
};
