const applyBackspaces = (s: string): string => {
	const backspaceRegex = /\w#|^#/g;
	while (backspaceRegex.test(s)) {
		s = s.replace(backspaceRegex, "");
	}
	return s;
};

const backspaceCompare = (s: string, t: string): boolean =>
	applyBackspaces(s) === applyBackspaces(t);
