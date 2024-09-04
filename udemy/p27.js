// 27 - DLL - unshift Exercise

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
    unshift(val) {
        if (!this.head) return this.push(val);
        const node = new DoublyListNode(val);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return this;
    }
}
