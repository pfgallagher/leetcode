export {};

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

const modifyString = (s: string): string => {
	while (s.includes("?")) {
		s = s.replace(
			"?",
			(_, offset) =>
				alphabet.find(
					char => char !== s[offset - 1] && char !== s[offset + 1],
				) || "",
		);
	}
	return s;
};
