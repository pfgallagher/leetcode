class RecentCounter {
	private requests: number[] = [];
	public ping = (t: number): number => {
		this.requests.push(t);
		while (this.requests.length && 3000 < t - this.requests[0]) {
			this.requests.shift();
		}
		return this.requests.length;
	};
}
