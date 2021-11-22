const average = (salary: number[]): number => {
	salary.sort((a, b) => a - b);
	salary.shift();
	salary.pop();
	return salary.reduce((a, c) => a + c, 0) / salary.length;
};

// const average = (salary: number[]): number => {
// 	let sum = 0;
// 	let min = Infinity;
// 	let max = -Infinity;
// 	for (const s of salary) {
// 		min = Math.min(min, s);
// 		max = Math.max(max, s);
// 		sum += s;
// 	}
// 	sum -= min;
// 	sum -= max;
// 	return sum / (salary.length - 2);
// };
