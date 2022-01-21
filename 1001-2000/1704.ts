const countVowels = (s: string): number => s.match(/[aeiou]/gi)?.length || 0;

const halvesAreAlike = (s: string): boolean => {
	const mid = Math.floor(s.length / 2);
	const [a, b] = [s.slice(0, mid), s.slice(mid)];
	return countVowels(a) === countVowels(b);
};
