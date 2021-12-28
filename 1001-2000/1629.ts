function* iteratePressTimes(releaseTimes: number[]): Generator<number> {
	let last = 0;
	for (const releaseTime of releaseTimes) {
		yield releaseTime - last;
		last = releaseTime;
	}
}

const slowestKey = (releaseTimes: number[], keysPressed: string): string => {
	let maxDuration = -Infinity;
	let slowestChar = "";
	const pressTimeGenerator = iteratePressTimes(releaseTimes);
	for (const char of keysPressed) {
		const correspondingPressTime: number = pressTimeGenerator.next().value;
		if (maxDuration <= correspondingPressTime) {
			slowestChar =
				maxDuration === correspondingPressTime
					? char < slowestChar
						? slowestChar
						: char
					: char;
			maxDuration = correspondingPressTime;
		}
	}
	return slowestChar;
};
