const parseDate = (dateStr: string): number => new Date(dateStr).getTime();

const dayInMS = 86_400_000;

const daysBetweenDates = (date1: string, date2: string): number =>
	Math.abs(parseDate(date1) - parseDate(date2)) / dayInMS;
