// 146 - LRU Cache

class LRUCache {
    constructor(capacity) {
        this.keys = new Map();
        this.vals = new DoublyLinkedList();
        this.capacity = capacity;
    }
    get(key) {
        if (!this.keys.has(key)) return -1;
        const value = this.keys.get(key).val;
        this.vals.remove(this.keys.get(key));
        this.keys.set(key, this.vals.insert(key, value));
        return value;
    }
    put(key, value) {
        if (this.keys.has(key)) this.vals.remove(this.keys.get(key));
        this.keys.set(key, this.vals.insert(key, value));
        if (this.vals.length > this.capacity) {
            this.keys.delete(this.vals.head.key);
            this.vals.remove(this.vals.head);
        }
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(key, val) {
        const node = new DoublyListNode(key, val);
        if (this.head) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
        return node;
    }
    remove(node) {
        if (!node.prev && !node.next) {
            this.head = null;
            this.tail = null;
        } else if (!node.prev) {
            this.head = node.next;
            this.head.prev = null;
        } else if (!node.next) {
            this.tail = node.prev;
            this.tail.next = null;
        } else {
            [node.prev.next, node.next.prev] = [node.next, node.prev];
        }
        this.length--;
    }
}

class DoublyListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
