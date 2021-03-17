export {};
class Node {
	val: number;
	children: Node[];
	constructor(val?: number) {
		this.val = val === undefined ? 0 : val;
		this.children = [];
	}
}

const postorder = (root: Node | null): number[] => {
	const stack: Node[] = [];
	const res: number[] = [];
	if (!root) {
		return res;
	}
	stack.push(root);
	while (stack.length) {
		const popped = stack.pop() as Node;
		res.unshift(popped.val);
		if (popped.children.length) {
			stack.push(...popped.children);
		}
	}
	return res;
};
