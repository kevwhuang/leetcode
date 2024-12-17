class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    dequeue() {
        if (!this.head) return null;
        const res = this.head.val;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return res;
    }
    enqueue(val) {
        if (this.head) this.tail = this.tail.next = new Node(val);
        else this.tail = this.head = new Node(val);
        return ++this.size;
    }
}

class Node {
    constructor(val) {
        this.val = val === undefined ? null : val;
        this.next = null;
    }
}

module.exports = Queue;
