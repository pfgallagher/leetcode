const timeToMins = (time: string): number => {
	const [hours, minutes] = time
		.split(":")
		.map(timeStr => Number.parseInt(timeStr, 10));
	return hours * 60 + minutes;
};

const convertTime = (current: string, correct: string): number => {
	const ops = [60, 15, 5, 1];
	const correctMins = timeToMins(correct);
	let curMins = timeToMins(current);
	let opCount = 0;
	while (curMins !== correctMins) {
		curMins += ops.find(option => option <= correctMins - curMins)!;
		opCount++;
	}
	return opCount;
};
