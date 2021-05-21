const rotateString = (s: string, goal: string): boolean =>
	s.length === goal.length && `${s}${s}`.includes(goal);
