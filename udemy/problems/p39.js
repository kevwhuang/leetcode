// 39 - SLL - rotate Exercise

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
    rotate(k) {
        let cur = this.head, length = 0;
        while (cur) {
            cur = cur.next;
            length++;
        }
        k = (k < 0 ? -k : length - k) % length;
        if (k === 0) return;
        cur = this.head;
        while (k--) cur = cur.next;
        let prev = this.head;
        while (cur.next) {
            prev = prev.next;
            cur = cur.next;
        }
        cur.next = this.head;
        this.head = prev.next;
        prev.next = null;
        this.tail = prev;
    }
}
