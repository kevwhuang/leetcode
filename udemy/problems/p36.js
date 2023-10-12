// 35 - SLL - pop Exercise

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
    pop() {
        if (!this.head) return;
        if (this.length === 1) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return node;
        }
        let cur = this.head;
        while (cur.next.next) {
            cur = cur.next;
        }
        const node = cur.next;
        cur.next = null;
        this.tail = cur;
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
}
