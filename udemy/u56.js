// 56 - Stacks - push Exercise

class StackNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const node = new StackNode(val);
        if (this.first) [this.first, this.first.next] = [node, this.first];
        else this.first = this.last = node;
        return ++this.size;
    }
}
