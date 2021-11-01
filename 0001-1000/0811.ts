// C'mon, LeetCode! Shouldn't we have to handle the root domain, too?! :)
const subdomainVisits = (cpdomains: string[]): string[] =>
	Object.entries(
		cpdomains.reduce<{ [subdomain: string]: number }>((acc, cpdomain) => {
			const [countStr, domain] = cpdomain.split(" ");
			const count = parseInt(countStr, 10);
			for (const subdomain of domain
				.split(".")
				.map((subdomain, i, arr) =>
					[subdomain, ...arr.slice(i + 1)].join("."),
				)) {
				if (acc.hasOwnProperty(subdomain)) {
					acc[subdomain] += count;
				} else {
					acc[subdomain] = count;
				}
			}
			return acc;
		}, {}),
	).map(([subdomain, count]) => `${count} ${subdomain}`);
