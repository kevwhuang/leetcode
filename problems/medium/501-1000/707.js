// 707 - Design Linked List

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addAtHead(val) {
        if (!this.head) return this.addAtTail(val);
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    addAtIndex(index, val) {
        if (index > this.length) return;
        if (index === 0) return this.addAtHead(val);
        if (index === this.length) return this.addAtTail(val);
        const node = new ListNode(val);
        const cur = this.#getNode(index - 1);
        [node.next, cur.next] = [cur.next, node];
        this.length++;
    }
    addAtTail(val) {
        const node = new ListNode(val);
        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this.length++;
    }
    deleteAtIndex(index) {
        if (index >= this.length) return;
        if (index === 0) return this.#shift();
        if (index === this.length - 1) return this.#pop();
        const cur = this.#getNode(index - 1);
        const node = cur.next;
        cur.next = node.next;
        this.length--;
    }
    get(index) {
        if (index >= this.length) return -1;
        let node = this.head;
        while (index--) node = node.next;
        return node.val;
    }
    #getNode(index) {
        let node = this.head;
        while (index--) node = node.next;
        return node;
    }
    #pop() {
        let cur = this.head;
        while (cur.next.next) cur = cur.next;
        cur.next = null;
        this.tail = cur;
        this.length--;
    }
    #shift() {
        this.head = this.head.next;
        this.length--;
        if (!this.head) this.tail = null;
    }
}
