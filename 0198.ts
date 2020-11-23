const rob = (nums: number[]): number =>
	nums.reduce(
		([oneBefore, twoBefore], n) => [
			Math.max(n + twoBefore, oneBefore),
			oneBefore,
		],
		[0, 0],
	)[0];
