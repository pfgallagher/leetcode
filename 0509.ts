const fib = (n: number): number =>
	!n ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);