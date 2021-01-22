const hexArr = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
];

const toHex = (num: number): string => {
	if (!num) {
		return "0";
	}
	if (num < 0) {
		num += Math.pow(2, 32);
	}
	const hex: string[] = [];
	while (num) {
		hex.unshift(hexArr[Math.floor(num % 16)]);
		num = Math.floor(num / 16);
	}
	return hex.join("");
};
