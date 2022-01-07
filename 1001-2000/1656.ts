class OrderedStream {
	private stream: string[];
	private cur: number = 0;
	constructor(n: number) {
		this.stream = Array(n);
	}
	public insert = (idKey: number, value: string): string[] => {
		this.stream[--idKey] = value;
		return this.retrieveChunk();
	};
	private get curValue(): string {
		return this.stream[this.cur];
	}
	private retrieveChunk = (): string[] => {
		const chunk: string[] = [];
		while (typeof this.curValue === "string") {
			chunk.push(this.curValue);
			this.cur++;
		}
		return chunk;
	};
}
