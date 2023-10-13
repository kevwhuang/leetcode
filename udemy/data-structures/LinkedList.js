class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let node = this.head;
        while (index--) node = node.next;
        return node;
    }

    pop() {
        if (!this.head) return null;
        let node;
        if (this.length === 1) {
            node = this.head;
            this.head = null;
            this.tail = null;
        } else {
            let cur = this.head;
            while (cur.next.next) cur = cur.next;
            node = cur.next;
            cur.next = null;
            this.tail = cur;
        }
        this.length--;
        return node;
    }

    push(val) {
        const node = new ListNode(val);
        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this.length++;
        return this;
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
        this.head = this.head.next;
        this.length--;
        if (!this.head) this.tail = null;
        return node;
    }

    unshift(val) {
        if (!this.head) return this.push(val);
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
}
