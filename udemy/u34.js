// 34 - DLL - reverse Exercise

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
    reverse() {
        let l = this.head, r = this.tail, i = 0;
        while (i++ < this.length / 2) {
            [l.val, r.val] = [r.val, l.val];
            l = l.next;
            r = r.prev;
        }
        return this;
    }
}
