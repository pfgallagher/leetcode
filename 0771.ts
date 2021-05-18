const numJewelsInStones = (jewels: string, stones: string): number =>
	[...stones].reduce((a, c) => (jewels.includes(c) ? ++a : a), 0);
