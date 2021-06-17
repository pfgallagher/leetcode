export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const middleNode = (head: ListNode | null): ListNode | null => {
	const nodes: ListNode[] = [];
	while (head) {
		nodes.push(head);
		head = head.next;
	}
	return nodes[Math.floor(nodes.length / 2)];
};
