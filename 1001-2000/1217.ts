// const minCostToMoveChips = (position: number[]): number => {
// 	const [even, odd] = position.reduce(
// 		(acc, cur) => {
// 			if (!(cur % 2)) {
// 				acc[0]++;
// 			} else {
// 				acc[1]++;
// 			}
// 			return acc;
// 		},
// 		[0, 0],
// 	);
// 	return odd < even ? odd : even;
// };

const minCostToMoveChips = (position: number[]): number =>
	Math.min(
		...position.reduce(
			(acc, cur) => {
				if (!(cur % 2)) {
					acc[0]++;
				} else {
					acc[1]++;
				}
				return acc;
			},
			[0, 0],
		),
	);
