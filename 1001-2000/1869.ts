const longestSegment = (s: string, target: string): number =>
	Math.max(
		...(s.match(new RegExp(`${target}+`, "g")) ?? [""]).map(
			match => match.length,
		),
	);

const checkZeroOnes = (s: string): boolean =>
	longestSegment(s, "0") < longestSegment(s, "1");
