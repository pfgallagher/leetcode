const isLongPressedName = (name: string, typed: string): boolean => {
	let nameI = 0;
	for (const char of typed) {
		if (char === name[nameI]) {
			nameI++;
		}
		if (char !== name[nameI - 1]) {
			return false;
		}
	}
	return nameI === name.length;
};
