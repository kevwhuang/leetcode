class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    dequeue() {
        if (!this.first) return null;
        const node = this.first;
        this.first = this.first.next;
        this.size--;
        if (!this.first) this.last = null;
        return node.val;
    }

    enqueue(val) {
        const node = new QueueNode(val);
        if (this.first) {
            this.last.next = node;
            this.last = node;
        } else {
            this.first = node;
            this.last = this.first;
        }
        return ++this.size;
    }
}
