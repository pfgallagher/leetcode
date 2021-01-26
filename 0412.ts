const fizzBuzz = (n: number): string[] =>
	[...Array(n)].map(
		(_, i) => `${++i % 3 ? "" : "Fizz"}${i % 5 ? "" : "Buzz"}` || `${i}`,
	);
