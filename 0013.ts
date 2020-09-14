type RomanMap = { [roman: string]: number };

const regNums: RomanMap = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

const subNums: RomanMap = {
	IV: 4,
	IX: 9,
	XL: 40,
	XC: 90,
	CD: 400,
	CM: 900,
};

const romanMap = { ...regNums, ...subNums };

const splitRegExp = new RegExp(
	`(${[...Object.keys(subNums), ""].join("|")})`,
	"g",
);

const romanToInt = (s: string): number =>
	s
		.split(splitRegExp)
		.filter(roman => roman)
		.map(roman => romanMap[roman])
		.reduce((a, c) => a + c, 0);
