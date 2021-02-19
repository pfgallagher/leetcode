const convertToBase7 = (num: number): string => {
	if (!num) {
		return "0";
	}
	const res: number[] = [];
	const isNeg = num < 0;
	let quotient = Math.abs(num);
	while (quotient) {
		res.unshift(quotient % 7);
		quotient = Math.floor(quotient / 7);
	}
	return `${isNeg ? "-" : ""}${res.join("")}`;
};
