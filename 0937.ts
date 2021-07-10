const reorderLogFiles = (logs: string[]): string[] => {
	const letterLogs: string[][] = [];
	const digitLogs: string[][] = [];
	for (const log of logs) {
		const logArr = log.split(" ");
		const correspondingLog = /\d+/.test(logArr[logArr.length - 1])
			? digitLogs
			: letterLogs;
		correspondingLog.push(logArr);
	}
	letterLogs.sort(([aId, ...aContents], [bId, ...bContents]) => {
		const joinedA = aContents.join(" ");
		const joinedB = bContents.join(" ");
		return joinedA < joinedB ? -1 : joinedB < joinedA ? 1 : aId < bId ? -1 : 1;
	});
	return [
		...letterLogs.map(log => log.join(" ")),
		...digitLogs.map(log => log.join(" ")),
	];
};
