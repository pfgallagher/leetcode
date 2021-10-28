export {};

const alphaRegExp = new RegExp(/[a-zA-Z]/);
const digitsRegExp = new RegExp(/\d/);

function* zip(arr1: string[], arr2: string[]): Generator<string> {
	while (arr1.length || arr2.length) {
		const arr1El = arr1.shift();
		if (arr1El !== undefined) {
			yield arr1El;
		}
		const arr2El = arr2.shift();
		if (arr2El !== undefined) {
			yield arr2El;
		}
	}
}

const filterStr = (s: string, selector: RegExp): string[] =>
	[...s].filter(char => selector.test(char));

const reformat = (s: string): string => {
	const alpha = filterStr(s, alphaRegExp);
	const digs = filterStr(s, digitsRegExp);
	const diff = alpha.length - digs.length;
	const iterator =
		1 < Math.abs(diff) ? [] : diff === 1 ? zip(alpha, digs) : zip(digs, alpha);
	let reformattedStr = "";
	for (const char of iterator) {
		reformattedStr += char;
	}
	return reformattedStr;
};
