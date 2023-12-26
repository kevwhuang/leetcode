class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    pop() {
        if (!this.first) return null;
        const node = this.first;
        this.first = this.first.next;
        this.size--;
        if (!this.first) this.last = null;
        return node.val;
    }
    push(val) {
        const node = new StackNode(val);
        if (this.first) [this.first, this.first.next] = [node, this.first];
        else this.first = this.last = node;
        return ++this.size;
    }
}

module.exports = Stack;
