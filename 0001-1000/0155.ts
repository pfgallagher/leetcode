class MinStack {
	private stack: number[] = [];
	public push = (x: number) => {
		this.stack.push(x);
	};
	public pop = () => {
		this.stack.pop();
	};
	public top = () => this.stack[this.stack.length - 1];
	public getMin = () => Math.min(...this.stack);
}
