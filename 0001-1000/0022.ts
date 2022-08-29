const generateParenthesis = (n: number): string[] => {
	const parenthesis: string[] = [];
	if (n) {
		for (let i = 0; i < n; i++) {
			for (const left of generateParenthesis(i)) {
				for (const right of generateParenthesis(n - 1 - i)) {
					parenthesis.push(`(${left})${right}`);
				}
			}
		}
	} else {
		parenthesis.push("");
	}
	return parenthesis;
};
