const largestGoodInteger = (num: string): string =>
	num.match(/(\d)\1\1/g)?.sort((a, b) => (a < b ? 1 : -1))[0] ?? "";
