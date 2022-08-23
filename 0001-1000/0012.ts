const romanValues: [number, string][] = [
	[1000, "M"],
	[900, "CM"],
	[500, "D"],
	[400, "CD"],
	[100, "C"],
	[90, "XC"],
	[50, "L"],
	[40, "XL"],
	[10, "X"],
	[9, "IX"],
	[5, "V"],
	[4, "IV"],
	[1, "I"],
];

const intToRoman = (num: number): string => {
	let roman = "";
	while (num) {
		const found = romanValues.find(([value]) => value <= num);
		if (found) {
			num -= found[0];
			roman += found[1];
		}
	}
	return roman;
};
