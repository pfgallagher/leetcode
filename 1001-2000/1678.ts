const interpret = (command: string): string => {
	const replacementRegExp = /\(\)|\(al\)/g;
	const replacements: { [key: string]: string } = {
		"()": "o",
		"(al)": "al",
	};
	return command.replace(replacementRegExp, match => replacements[match]);
};
