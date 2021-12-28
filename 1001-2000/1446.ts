const maxPower = (s: string): number =>
	Math.max(...(s.match(/(.)\1+/g)?.map(sub => sub.length) || [1]));
