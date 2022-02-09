const countMatches = (
	items: [string, string, string][],
	ruleKey: string,
	ruleValue: string,
): number => {
	const idx = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
	return items.reduce(
		(acc, cur) => (cur[idx] === ruleValue ? acc + 1 : acc),
		0,
	);
};
