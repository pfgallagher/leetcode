const parseDay = (day: string): number =>
	parseInt(day.replace(/[a-zA-Z]/g, ""), 10);

const parseMonth = (month: string): number => {
	const monthMap: { [month: string]: number } = {
		Jan: 0,
		Feb: 1,
		Mar: 2,
		Apr: 3,
		May: 4,
		Jun: 5,
		Jul: 6,
		Aug: 7,
		Sep: 8,
		Oct: 9,
		Nov: 10,
		Dec: 11,
	};
	return monthMap[month];
};

const dateStrToDate = (date: string): Date => {
	const [day, month, year] = date.split(" ");
	return new Date(
		Date.UTC(parseInt(year, 10), parseMonth(month), parseDay(day)),
	);
};

const reformatDate = (date: string): string =>
	dateStrToDate(date).toISOString().split("T")[0];
