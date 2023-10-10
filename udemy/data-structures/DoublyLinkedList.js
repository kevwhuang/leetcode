class DoublyListNode {
    constructor(val, next, prev) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.prev = prev === undefined ? null : prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
