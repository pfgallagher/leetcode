const largeGroupPositions = (s: string): number[][] =>
	[...s.matchAll(/([a-z])\1{2,}/g)].map(({ 0: match, index = -1 }) => [
		index,
		index + match.length - 1,
	]);
