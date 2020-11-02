const divmod = (a: number, b: number): [number, number] => [
	Math.floor(a / b),
	a % b,
];

const convertToTitle = (n: number): string => {
	let str = "";
	while (n) {
		const [quotient, remainder] = divmod(n - 1, 26);
		str = String.fromCharCode(remainder + 65) + str;
		n = quotient;
	}
	return str;
};
