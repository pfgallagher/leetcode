const removeOuterParentheses = (s: string): string => {
	const primitives: string[] = [];
	let openCount = 0;
	let curPrimitive = "";
	for (const char of s) {
		curPrimitive += char;
		if (char === "(") {
			openCount++;
		} else {
			openCount--;
		}
		if (!openCount) {
			primitives.push(curPrimitive);
			curPrimitive = "";
		}
	}
	return primitives.map(primitive => primitive.slice(1, -1)).join("");
};
