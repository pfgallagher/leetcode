export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const getNodes = (head: ListNode | null): ListNode[] => {
	const nodes: ListNode[] = [];
	while (head) {
		nodes.push(head);
		head = head.next;
	}
	return nodes;
};

const getIntersectionNode = (
	headA: ListNode | null,
	headB: ListNode | null,
): ListNode | null => {
	const nodesA = getNodes(headA);
	const nodesB = getNodes(headB);
	const intersection = nodesA.find(node => nodesB.includes(node));
	return intersection || null;
};
