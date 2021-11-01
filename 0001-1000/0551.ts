const checkRecord = (s: string): boolean =>
	!(s.match(/L{3,}/g) || []).length && (s.match(/A/g) || []).length <= 1;
