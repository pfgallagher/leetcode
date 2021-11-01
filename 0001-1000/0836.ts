const isRectangleOverlap = (
	[ax1, ay1, ax2, ay2]: number[],
	[bx1, by1, bx2, by2]: number[],
): boolean =>
	ax1 !== ax2 &&
	ay1 !== ay2 &&
	bx1 !== bx2 &&
	by1 !== by2 &&
	bx1 < ax2 &&
	by1 < ay2 &&
	ax1 < bx2 &&
	ay1 < by2;
