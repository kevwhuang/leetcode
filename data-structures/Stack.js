class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    pop() {
        if (!this.head) return null;
        const res = this.head.val;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return res;
    }
    push(val) {
        if (this.head) this.head = new Node(val, this.head);
        else this.head = this.tail = new Node(val);
        return ++this.size;
    }
}

class Node {
    constructor(val, next) {
        this.val = val === undefined ? null : val;
        this.next = next === undefined ? null : next;
    }
}

module.exports = Stack;
