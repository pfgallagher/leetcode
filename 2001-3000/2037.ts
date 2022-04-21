function* iterateSeatDiffs(
	seats: number[],
	students: number[],
): Generator<number> {
	students.sort((a, b) => a - b);
	seats.sort((a, b) => a - b);
	for (let i = 0; i < students.length; i++) {
		yield Math.abs(students[i] - seats[i]);
	}
}

const minMovesToSeat = (seats: number[], students: number[]): number =>
	[...iterateSeatDiffs(seats, students)].reduce((a, c) => a + c, 0);
