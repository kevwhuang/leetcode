// 46 - SLL - remove Exercise

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
        if (!this.head) return;
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
    remove(index) {
        if (index < 0 || index >= this.length) return;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const cur = this.get(index - 1);
        const node = cur.next;
        cur.next = node.next;
        this.length--;
        return node;
    }
    shift() {
        if (!this.head) return;
        const node = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.head) this.tail = null;
        return node;
    }
}
