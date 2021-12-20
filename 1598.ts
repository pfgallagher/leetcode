const minOperations = (logs: string[]): number => {
	let distanceFromRoot = 0;
	for (const log of logs) {
		if (log === "../") {
			if (distanceFromRoot) {
				distanceFromRoot--;
			}
		} else if (log !== "./") {
			distanceFromRoot++;
		}
	}
	return distanceFromRoot;
};
