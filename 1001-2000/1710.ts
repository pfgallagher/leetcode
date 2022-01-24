const maximumUnits = (boxTypes: number[][], truckSize: number): number =>
	boxTypes
		.flatMap(([boxCount, boxSize]) => Array(boxCount).fill(boxSize))
		.sort((a, b) => b - a)
		.slice(0, truckSize)
		.reduce((a, c) => a + c, 0);
