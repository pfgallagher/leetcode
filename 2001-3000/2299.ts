const strongPasswordCheckerII = (password: string): boolean =>
	8 <= password.length &&
	!/(.)\1/.test(password) &&
	[/[a-z]/, /[A-Z]/, /\d/, /[!@#$%^&*()\-+]/].every(regExp =>
		regExp.test(password),
	);
