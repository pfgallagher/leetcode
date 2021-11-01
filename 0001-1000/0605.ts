const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
	let count = 0;
	flowerbed.forEach((plot, i) => {
		if (
			!plot &&
			(!i || !flowerbed[i - 1]) &&
			(i === flowerbed.length - 1 || !flowerbed[i + 1])
		) {
			flowerbed[i] = 1;
			count++;
		}
	});
	return n <= count;
};
