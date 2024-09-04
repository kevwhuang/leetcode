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
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        const node = new DoublyListNode(val);
        const cur = this.get(index - 1);
        [node.prev, node.next] = [cur, cur.next];
        [cur.next.prev, cur.next] = [node, node];
        this.length++;
        return this;
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
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const node = this.get(index);
        [node.prev.next, node.next.prev] = [node.next, node.prev];
        [node.prev, node.next] = [null, null];
        this.length--;
        return node;
    }
    set(index, val) {
        const node = this.get(index);
        if (!node) return false;
        node.val = val;
        return true;
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

module.exports = DoublyLinkedList;
