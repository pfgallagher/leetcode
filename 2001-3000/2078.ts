// const maxDistance = (colors: number[]): number =>
// 	Math.max(
// 		...colors.map((color, i) => {
// 			for (let j = colors.length - 1; i < j; j--) {
// 				if (colors[j] !== color) {
// 					return j - i;
// 				}
// 			}
// 			return -Infinity;
// 		}),
// 	);

const maxDistance = (colors: number[]): number => {
	let max = -Infinity;
	for (let i = 0; i < colors.length; i++) {
		for (let j = colors.length - 1; i < j; j--) {
			if (colors[j] !== colors[i]) {
				max = Math.max(max, j - i);
			}
		}
	}
	return max;
};
