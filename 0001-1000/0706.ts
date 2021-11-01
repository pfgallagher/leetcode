class MyHashMap {
	private map: { [key: number]: number } = {};

	public put = (key: number, value: number): void => {
		this.map[key] = value;
	};

	public get = (key: number): number =>
		this.map.hasOwnProperty(key) ? this.map[key] : -1;

	public remove = (key: number): void => {
		delete this.map[key];
	};
}
