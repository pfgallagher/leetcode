const containsPattern = (arr: number[], m: number, k: number): boolean =>
	new RegExp(`((\\d ){${m}})\\1{${k - 1}}`).test(`${arr.join(" ")} `);
