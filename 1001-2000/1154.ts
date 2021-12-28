const dayOfYear = (date: string): number => {
	const parsedDate = new Date(date);
	return (
		(parsedDate.getTime() - Date.UTC(parsedDate.getFullYear(), 0, 0)) /
		86_400_000
	);
};
