const squareIsWhite = (coordinates: string): boolean =>
	!!((coordinates[0].charCodeAt(0) - 96 + parseInt(coordinates[1], 10)) % 2);
