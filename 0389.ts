const charSum = (s: string): number =>
	[...s].reduce((a, c) => a + c.charCodeAt(0), 0);

const findTheDifference = (s: string, t: string): string =>
	String.fromCharCode(charSum(t) - charSum(s));
