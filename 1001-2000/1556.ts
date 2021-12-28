function* iterateDigitsReversed(n: number): Generator<[string, number]> {
	const nStr = n.toString();
	for (let i = nStr.length - 1, count = 1; 0 <= i; i--, count++) {
		yield [nStr[i], count];
	}
}

const createSeparatorChecker = (n: number) => {
	const strLen = n.toString().length;
	return (count: number): boolean =>
		!!(count && !(count % 3) && count !== strLen);
};

const thousandSeparator = (n: number): string => {
	const separated: string[] = [];
	const shouldInsertSeparator = createSeparatorChecker(n);
	for (const [dig, count] of iterateDigitsReversed(n)) {
		separated.unshift(dig);
		if (shouldInsertSeparator(count)) {
			separated.unshift(".");
		}
	}
	return separated.join("");
};
