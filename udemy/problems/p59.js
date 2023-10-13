// 59 - Queues - enqueue Exercise

class QueueNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
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
