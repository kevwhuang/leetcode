// 39 - SLL - insert Exercise

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
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return !!this.push(val);
        const node = new ListNode(val);
        const cur = this.get(index - 1);
        [node.next, cur.next] = [cur.next, node];
        this.length++;
        return true;
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
    unshift(val) {
        if (!this.head) return !!this.push(val);
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return true;
    }
}
