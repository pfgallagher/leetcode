const dayOfTheWeek = (day: number, month: number, year: number): string =>
	[
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	][new Date(year, month - 1, day).getDay()];
