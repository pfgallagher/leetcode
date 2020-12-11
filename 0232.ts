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

const test = new MyQueue();
console.log(test.push(1));
console.log(test.push(2));
console.log(test.peek());
console.log(test.pop());
console.log(test.empty());

// ["MyQueue","push","push","peek","pop","empty"]
// [[],[1],[2],[],[],[]]

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
