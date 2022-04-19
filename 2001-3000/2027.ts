const minimumMoves = (s: string): number => s.match(/X.{0,2}/g)?.length ?? 0;
