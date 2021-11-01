const numUniqueEmails = (emails: string[]) =>
	new Set<string>(
		emails.map(email => email.replace(/\.(?=.*@)|\+.*(?=@)/g, "")),
	).size;
