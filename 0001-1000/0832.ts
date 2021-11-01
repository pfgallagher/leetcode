const flipAndInvertImage = (image: number[][]): number[][] =>
	image.map(row => row.reverse().map(cell => (cell ? 0 : 1)));
