const generateTheString = (n: number): string =>
	!(n % 2) ? `${"a".repeat(n - 1)}b` : "a".repeat(n);
