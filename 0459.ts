const repeatedSubstringPattern = (s: string): boolean =>
	s.repeat(2).slice(1, -1).includes(s);
