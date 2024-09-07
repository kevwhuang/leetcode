// 32 - DLL - remove Exercise

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
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let node = this.head;
        if (index < this.length / 2) {
            while (index--) node = node.next;
        } else {
            node = this.tail;
            while (index++ < this.length - 1) node = node.prev;
        }
        return node;
    }
    pop() {
        if (!this.head) return null;
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
    remove(index) {
        if (index < 0 || index >= this.length) return;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const node = this.get(index);
        [node.prev.next, node.next.prev] = [node.next, node.prev];
        [node.prev, node.next] = [null, null];
        this.length--;
        return node;
    }
    shift() {
        if (!this.head) return null;
        const node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }
}
