const combinations = <T>(options: T[], length: number): T[][] => {
	if (length === 1) {
		return options.map(option => [option]);
	}
	const combos: T[][] = [];
	options.forEach((option, i) => {
		const subCombos = combinations(options.slice(i + 1), length - 1);
		subCombos.forEach((subCombo: T[]) => {
			combos.push([option].concat(subCombo));
		});
	});
	return combos;
};

const watchOptions: {
	n: number;
	type: string;
}[] = [
	{
		n: 8,
		type: "hr",
	},
	{
		n: 4,
		type: "hr",
	},
	{
		n: 2,
		type: "hr",
	},
	{
		n: 1,
		type: "hr",
	},
	{
		n: 32,
		type: "min",
	},
	{
		n: 16,
		type: "min",
	},
	{
		n: 8,
		type: "min",
	},
	{
		n: 4,
		type: "min",
	},
	{
		n: 2,
		type: "min",
	},
	{
		n: 1,
		type: "min",
	},
];

const filterInvalid = (times: string[]): string[] =>
	times.filter(time => {
		const [hrs, mins] = time.split(":").map(n => parseInt(n, 10));
		return hrs <= 11 && mins <= 59;
	});

const readBinaryWatch = (num: number): string[] =>
	!num
		? ["0:00"]
		: filterInvalid(
				combinations(watchOptions, num).map(combo => {
					const hrs = combo
						.filter(({ type }) => type === "hr")
						.map(({ n }) => n)
						.reduce((a, c) => a + c, 0);
					const mins = combo
						.filter(({ type }) => type === "min")
						.map(({ n }) => n)
						.reduce((a, c) => a + c, 0);
					return `${hrs}:${mins.toString().padStart(2, "0")}`;
				}),
		  );
