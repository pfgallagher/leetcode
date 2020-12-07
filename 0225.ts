class MyStack {
	private stack: number[] = [];
	push = (x: number): void => {
		this.stack.push(x);
	};
	pop = () => this.stack.pop();
	top = (): number => this.stack[this.stack.length - 1];
	empty = (): boolean => !this.stack.length;
}
