class MyQueue {
	private queue: number[] = [];

	push = (x: number): void => {
		const temp = [];
		while (!this.empty()) {
			temp.push(this.queue.pop());
		}
		temp.push(x);
		while (temp.length) {
			this.queue.push(temp.pop() as number);
		}
	};

	pop = () => this.queue.pop();

	peek = () => this.queue[this.queue.length - 1];

	empty = () => !this.queue.length;
}
