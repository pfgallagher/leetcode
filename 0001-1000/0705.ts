class MyHashSet {
	private set: number[] = [];

	public add = (key: number): void => {
		if (!this.contains(key)) {
			this.set.push(key);
		}
	};

	public remove = (key: number): void => {
		if (this.contains(key)) {
			this.set.splice(this.set.indexOf(key), 1);
		}
	};

	public contains = (key: number): boolean => this.set.includes(key);
}
