const makeFancyString = (s: string): string =>
	s.replace(/(.)\1{2,}/g, match => match.slice(0, 2));
