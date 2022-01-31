const isHidden = (char: string): boolean => char === "?";

const maximumHours = ([first, second]: string): string => {
	const secondIsHidden = isHidden(second);
	if (isHidden(first)) {
		first = secondIsHidden || parseInt(second, 10) <= 3 ? "2" : "1";
	}
	if (secondIsHidden) {
		second = first === "2" ? "3" : "9";
	}
	return `${first}${second}`;
};

const maximumMinutes = ([first, second]: string): string => {
	if (isHidden(first)) {
		first = "5";
	}
	if (isHidden(second)) {
		second = "9";
	}
	return `${first}${second}`;
};

const maximumTime = (time: string): string => {
	const [hour, min] = time.split(":");
	return `${maximumHours(hour)}:${maximumMinutes(min)}`;
};
