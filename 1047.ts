export {};

// const removeDuplicates = (s: string): string => {
// 	while (true) {
// 		const last = s;
// 		s = s.replace(/(.)\1/g, "");
// 		if (s === last) {
// 			break;
// 		}
// 	}
// 	return s;
// };

const removeDuplicates = (s: string): string => {
	const deduped: string[] = [];
	for (const char of s) {
		if (char !== deduped[deduped.length - 1]) {
			deduped.push(char);
		} else {
			deduped.pop();
		}
	}
	return deduped.join("");
};
