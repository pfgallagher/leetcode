const alphabet = "abcdefghijklmnopqrstuvwxyz";

const goodRegExp = () =>
	new RegExp(
		[...alphabet]
			.map(lower => {
				const upper = lower.toUpperCase();
				return `${lower}${upper}|${upper}${lower}`;
			})
			.join("|"),
		"g",
	);

const makeGood = (s: string): string => {
	const goodStr = s.replace(goodRegExp(), "");
	return goodStr === s ? goodStr : makeGood(goodStr);
};
