export {};

enum BinChar {
	zero = "0",
	one = "1",
}

function* iterateAltBinChars(start: BinChar): Generator<BinChar> {
	const next = start === BinChar.zero ? BinChar.one : BinChar.zero;
	while (true) {
		yield start;
		yield next;
	}
}

const altBinStr = (n: number, start: BinChar): string => {
	const binStrGenerator = iterateAltBinChars(start);
	let str = "";
	for (let i = 0; i < n; i++) {
		str += binStrGenerator.next().value;
	}
	return str;
};

const altBinStrs = (n: number): [string, string] => [
	altBinStr(n, BinChar.zero),
	altBinStr(n, BinChar.one),
];

const countDifferentChars = (a: string, b: string): number => {
	let count = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			count++;
		}
	}
	return count;
};

const minOperations = (s: string): number =>
	Math.min(
		...altBinStrs(s.length).map(binStr => countDifferentChars(s, binStr)),
	);
