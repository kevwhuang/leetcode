// 31 - DLL - pop Exercise

class DoublyListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pop() {
        if (!this.head) return;
        const node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }
    push(val) {
        const node = new DoublyListNode(val);
        if (this.head) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this.length++;
        return this;
    }
}
