const countStudents = (students: number[], sandwiches: number[]): number => {
	let cycleCount = 0;
	while (students.length && sandwiches.length) {
		const curStudent = students.shift()!;
		const curSandwich = sandwiches.shift()!;
		if (curStudent === curSandwich) {
			cycleCount = 0;
			continue;
		} else {
			sandwiches.unshift(curSandwich);
			students.push(curStudent);
			cycleCount++;
		}
		if (cycleCount === students.length + 1) {
			break;
		}
	}
	return students.length;
};
