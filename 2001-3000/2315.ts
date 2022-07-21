const countAsterisks = (s: string): number => {
	let count = 0;
	let isInsideBar = false;
	for (const char of s) {
		if (char === "|") {
			isInsideBar = !isInsideBar;
		}
		if (char === "*" && !isInsideBar) {
			count++;
		}
	}
	return count;
};
