const removePalindromeSub = (s: string): number =>
	s.length ? (s === [...s].reverse().join("") ? 1 : 2) : 0;
